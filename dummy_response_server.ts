import { server } from "./my_server.ts";

for await (const request of server) {
  if (
    request.method === "POST" && request.url === "/store-message" &&
    request.contentLength
  ) {
    const buffer = new Uint8Array(request.contentLength);
    let totalBytesRead = 0;

    while (true) {
      const bytesRead = await request.body.read(buffer);
      if (bytesRead === null) {
        break;
      }
      totalBytesRead += bytesRead;
      if (totalBytesRead >= request.contentLength) {
        break;
      }
    }

    await Deno.writeFile("user-message.text", buffer);
    const decoder = new TextDecoder();
    const data = decoder.decode(buffer);
    console.log(data);

    const headers = new Headers();
    headers.set("Content-Type", "text/html");
    request.respond({ headers, status: 303 });
  } else {
    const headers = new Headers();
    headers.set("Content-Type", "text/html");
    request.respond({ body: "<h2>Response from Deno!</h2>", headers });
  }
}

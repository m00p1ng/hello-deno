import { RouterContext } from "https://deno.land/x/oak/mod.ts";

import { LearningResource } from "../models/learning-resource.ts";

type RContext = RouterContext<
  Record<string | number, string | undefined>,
  Record<string, any>
>;

export async function getResources(ctx: RContext) {
  const resources = await LearningResource.findAll();
  ctx.response.body = { resources };
}

export async function addResources(ctx: RContext) {
  const body = await ctx.request.body();
  const title = (await body.value).title;
  const description = (await body.value).description;
  const imageUrl = (await body.value).imageUrl;
  const url = (await body.value).url;
  const id = LearningResource.create({ title, description, imageUrl, url });

  ctx.response.body = { insertedResource: id };
}

export async function updateResources(ctx: RContext) {
  const body = await ctx.request.body();
  const title = (await body.value).title;
  const description = (await body.value).description;
  const imageUrl = (await body.value).imageUrl;
  const url = (await body.value).url;
  const id = ctx.params.resourceId!;

  const updatedResource = LearningResource.update(
    id,
    { title, description, imageUrl, url },
  );
  ctx.response.body = {
    message: "Updated resource",
    updatedResource,
  };
}

export async function deleteResources(ctx: RContext) {
  const id = ctx.params.resourceId!;
  LearningResource.delete(id);
  ctx.response.body = { message: "Deleted resource!" };
}

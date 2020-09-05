interface Resource {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

let resources: Resource[] = [];

export class LearningResource {
  static create(data: Resource) {
    const id = new Date().toISOString();
    resources.push({ ...data, id });

    return { id };
  }

  static findAll() {
    const result = resources;

    return result;
  }

  static update(id: string, data: Resource) {
    let resource = resources.find((res) => res.id === id);
    resource = {
      ...resource,
      ...data,
    };

    return resource;
  }

  static delete(id: string) {
    resources = resources.filter((res) => res.id !== id);
  }
}

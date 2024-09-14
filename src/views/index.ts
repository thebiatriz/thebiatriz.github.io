export class Views {
  static Home(): Promise<any> {
    return import("@/views/index.vue");
  }
}
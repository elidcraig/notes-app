import { createRequire as topLevelCreateRequire } from 'module';const require = topLevelCreateRequire(import.meta.url);
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// stacks/MyStack.ts
import { Api } from "sst/constructs";
function API({ stack }) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler"
    }
  });
  stack.addOutputs({
    ApiEndpoint: api.url
  });
}
__name(API, "API");

// sst.config.ts
var sst_config_default = {
  config(_input) {
    return {
      name: "notes",
      region: "us-east-1"
    };
  },
  stacks(app) {
    app.stack(API);
  }
};
export {
  sst_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3RhY2tzL015U3RhY2sudHMiLCAic3N0LmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgU3RhY2tDb250ZXh0LCBBcGkgfSBmcm9tIFwic3N0L2NvbnN0cnVjdHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEFQSSh7IHN0YWNrIH06IFN0YWNrQ29udGV4dCkge1xuICBjb25zdCBhcGkgPSBuZXcgQXBpKHN0YWNrLCBcImFwaVwiLCB7XG4gICAgcm91dGVzOiB7XG4gICAgICBcIkdFVCAvXCI6IFwicGFja2FnZXMvZnVuY3Rpb25zL3NyYy9sYW1iZGEuaGFuZGxlclwiLFxuICAgIH0sXG4gIH0pO1xuICBzdGFjay5hZGRPdXRwdXRzKHtcbiAgICBBcGlFbmRwb2ludDogYXBpLnVybCxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgU1NUQ29uZmlnIH0gZnJvbSBcInNzdFwiO1xuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4vc3RhY2tzL015U3RhY2tcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb25maWcoX2lucHV0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IFwibm90ZXNcIixcbiAgICAgIHJlZ2lvbjogXCJ1cy1lYXN0LTFcIixcbiAgICB9O1xuICB9LFxuICBzdGFja3MoYXBwKSB7XG4gICAgYXBwLnN0YWNrKEFQSSk7XG4gIH1cbn0gc2F0aXNmaWVzIFNTVENvbmZpZztcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7O0FBQUEsU0FBdUIsV0FBVztBQUUzQixTQUFTLElBQUksRUFBRSxNQUFNLEdBQWlCO0FBQzNDLFFBQU0sTUFBTSxJQUFJLElBQUksT0FBTyxPQUFPO0FBQUEsSUFDaEMsUUFBUTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1g7QUFBQSxFQUNGLENBQUM7QUFDRCxRQUFNLFdBQVc7QUFBQSxJQUNmLGFBQWEsSUFBSTtBQUFBLEVBQ25CLENBQUM7QUFDSDtBQVRnQjs7O0FDQ2hCLElBQU8scUJBQVE7QUFBQSxFQUNiLE9BQU8sUUFBUTtBQUNiLFdBQU87QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTyxLQUFLO0FBQ1YsUUFBSSxNQUFNLEdBQUc7QUFBQSxFQUNmO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==

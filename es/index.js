const version = "1.0.0";
function install(app) {
  const components = [];
  components.forEach((item) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}
var stdin_default = {
  install,
  version
};
export {
  stdin_default as default,
  install,
  version
};

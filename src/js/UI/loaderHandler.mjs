
/*
 * for  setup the loader for the app
 */
const loaderHandler = (status) => {
  if (status) {
    document.body.style.height = "100vh";
    document.querySelector(".loader__container").style.cssText = "z-index: 100000000; opacity: 1;";
  } else {
    document.body.style.height = "";
    document.querySelector(".loader__container").style.cssText = "z-index: -1; opacity: 0;";
  }
};

export default loaderHandler;


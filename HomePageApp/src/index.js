// we use this approach because when we added the
// shared property in webpack federation plugin,
// to tell consumers that react is shared, then the existing app is trying to ignore react and react-dom from
// being loaded in the app, that's why we need to move the initialization of react dom from index.js which is the entry point
// to a bootstrap and in index.js will call that bootstrap file to let it load react for us
// (the error was before hacing bootstrap.js - that "shared module is not available in the eager consumption")
// also what could be the approach here is to delay the bootstraping the entire react initialization
// check other tutorials what they are saying about this approach
import("./bootstrap");

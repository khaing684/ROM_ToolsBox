<<<<<<< HEAD
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
=======
/**
 * Measures and reports web vitals performance metrics.
 * @param {function} onPerfEntry - Callback function to handle metric results.
 * If provided, this function will be called with each metric.
 */
const reportWebVitals = onPerfEntry => {
  // Check if a callback function is provided
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import web-vitals library and report various metrics
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);   // Cumulative Layout Shift
      getFID(onPerfEntry);   // First Input Delay
      getFCP(onPerfEntry);   // First Contentful Paint
      getLCP(onPerfEntry);   // Largest Contentful Paint
      getTTFB(onPerfEntry);  // Time to First Byte
>>>>>>> main
    });
  }
};

export default reportWebVitals;

export default function uniqueFilterData(data, property) {
  var uniqueFilterDataSet = new Set();

  data.forEach((item) => {
    // Check if the property exists in the item
    if (item.hasOwnProperty(property)) {
      uniqueFilterDataSet.add(item[property].toLowerCase());
    }
  });

  // Convert the Set to an array if needed
  var uniqueFilterDataArray = Array.from(uniqueFilterDataSet);

  return uniqueFilterDataArray;
}

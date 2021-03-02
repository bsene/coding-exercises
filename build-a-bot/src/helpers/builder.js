const isLastIndexOfCollection = (index, collection) => index === collection.length - 1;

const isBetWeenCollectionBoundaries = (index, collect) => index >= 0 || index < collect.length;

const getPreviousCollectionIndex = function (currentIndex) {
  if (currentIndex <= 0) return 0;
  return currentIndex - 1;
};

const getNextCollectionIndex = function (currentIndex, collection) {
  if (collection) {
    const lastCollectionIndex = collection.length - 1;
    if (isBetWeenCollectionBoundaries(currentIndex, collection)) return lastCollectionIndex;
    if (isLastIndexOfCollection(currentIndex, collection)) return currentIndex;
  }

  return currentIndex + 1;
};

exports.getNextCollectionIndex = getNextCollectionIndex;
exports.getPreviousCollectionIndex = getPreviousCollectionIndex;

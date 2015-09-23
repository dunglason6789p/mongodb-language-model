var definitions = module.exports = {
  treeOperators: ['$or', '$and', '$nor'],
  listOperators: ['$in', '$nin', '$elemMatch'],
  valueOperators: ['$gt', '$gte', '$lt', '$lte', '$exists', '$type', '$size', '$eq', '$ne', '$not'],
  geoOperators: ['$geoWithin'],
  geoShapeOperators: ['$center', '$centerSphere', '$box', '$polygon']
};

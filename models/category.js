var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    name: {
        type: String,
        index: true,
        required: true
    },
    description: {
        type: String
    }
});

var Category = module.exports = mongoose.model('Category', categorySchema);

//get all articles
module.exports.getCategories = function(callback) {
    Category.find(callback);
}

//get article by ID
module.exports.getCategoriesByID = function(id, callback) {
    Category.findById(id, callback);
}

//get article by category
module.exports.getArticlesByCategory = function(category, callback) {
    var query = {category: category}
    Category.find(query, callback);
}

//create new Category
module.exports.createCategory = function(newCategory, callback) {
    newCategory.save(callback);
}

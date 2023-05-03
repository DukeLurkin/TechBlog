const Post = require('./posts');
const Comment = require('./comments');
const User = require('./user');

User.hasMany(Post, {
  // Define the third table needed to store the foreign keys
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
  // Define an alias for when data is retrieved
  // as: 'location_travellers'
});
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

module.exports = { Post, Comment, User };

var fs = require('fs');
var path = require('path');

function filterFiles(list, filter) {
  return list.filter(function(file) {
    return path.extname(file) == '.' + filter;
  });
};

function SearchDir(directory, filter, callback) {
    
        
      fs.readdir(directory, function(error, files) {
        
        if (error) {
          return callback(error);
        }
        var filtered = filterFiles(files, filter);
        return callback(null, filtered);
      });
    
    };

module.exports = { filterFiles,SearchDir };



function booWho(bool) {
    if (typeof bool === 'boolean') {
        return true;
    }
    return false;
  }
  
  booWho(null);

  module.exports = booWho;
module.exports = function(str){  
  var moment= require('moment');
  
  var urlstring=decodeURIComponent(str);  
  var unix=parseInt(str);
  
  var timestamp = moment.unix(unix);  
  var date=moment(urlstring, ["MMM-DD-YYYY", "MMMM-DD-YYYY", "MMM-D-YYYY", "MMMM-D-YYYY"], "en").format("MMMM DD, YYYY");
  
  var validUnix=(moment(timestamp).isValid());
  var validDate=(moment(date).isValid());
  

  if (validUnix){    
    date=moment(timestamp).format("MMMM DD, YYYY");    
    } 
  else if (validDate){      
    unix=moment(date).unix();
    } 
  else if (!validUnix && !validDate) {
    date=null;
    unix=null;
    }  
  
  return JSON.stringify({"date":date, "unix":unix});
  
  }

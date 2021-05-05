require('isomorphic-fetch');


function getPublicPosts() {
    return fetch(`http://localhost:8080/api/public/`).then(function(resp) {
        return resp.json();
    });
}

function getPrivatePosts() {
    return fetch(`http://localhost:8080/api/private/`).then(function(resp) {
        return resp.json();
    });
}

function getDrafts() {
    return fetch(`http://localhost:8080/api/drafts/`).then(function(resp) {
        return resp.json();
    });
}
//function InsertDraft(){

//}
  
function handleError(error) {
    console.warn(error);
    return null;
}

module.exports = {
    getPublicPosts: function() {
        return getPublicPosts().catch(handleError);
    }, 

		getPrivatePosts: function() {
        return getPublicPosts().catch(handleError);
    },
    getDrafts: function() {
        return getDrafts().catch(handleError);
    }
};


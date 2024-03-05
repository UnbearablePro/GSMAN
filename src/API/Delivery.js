// class Delivery {

//     static sendRequest(request) {
//         UrlFetchApp.fetch(request.url, request.details)
        
//         .then(function(response) {
//             // Handle the response in the callback function
//             handleResponse(response.getContentText());
//           })
//           .catch(function(error) {
//             // Handle errors
//             console.error('Error:', error);
//           });;
//     }

//     static handleResponse(responseText) {
//         // Process the response here
//         console.log('Response:', responseText);
//       }

// }
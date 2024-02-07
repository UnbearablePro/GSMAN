// /* The code you provided is a set of JavaScript functions that are used for testing the functionality
// of a module called "PropertiesHandlerDocument". */
// function testPropertiesHandlerDocument() {
//   let target = "PropertiesHandlerDocument";
//   TestUtils.logModuleStarting(target);

//   let listOfTests = [
//     // Normal Tests
//     shouldSuccsefullyIncrementAllInputPropertiesFromAList_,
//     // shouldSuccsefullyIncrementProperties_
//   ];

//   if (flagForInteractionTesting == true) { // Full testing
//     listOfTests = listOfTests.concat([
//       // Interaction Tests

//     ]);
//   };

//   TestUtils.testListOfTest(target, listOfTests);
// }

// function shouldSuccsefullyIncrementAllInputPropertiesFromAList_() {

//   let testCase = [propKey.TELEFOANESUNATE, propKey.TELEFOANERASPUNSE];
//   let expected = [];
//   let result = [];

//   expected[0] = Utils.addTwoStrings(PropertiesService.getDocumentProperties().getProperty(testCase[0]), "1");
//   expected[1] = Utils.addTwoStrings(PropertiesService.getDocumentProperties().getProperty(testCase[1]), "1");

//   PropertiesHandlerDocument.incrementFromList(testCase);

//   result[0] = PropertiesService.getDocumentProperties().getProperty(testCase[0]);
//   result[1] = PropertiesService.getDocumentProperties().getProperty(testCase[1]);

//   TestUtils.assert(expected[0], result[0]);
//   TestUtils.assert(expected[1], result[1]);
// }

// function shouldSuccsefullyIncrementProperties_() {

//   let testCase = [propKey.TELEFOANESUNATE, propKey.TELEFOANERASPUNSE];
//   let expected = [];
//   let result = [];

//   expected[0] = StringUtils.addTwoStrings(PropertiesService.getDocumentProperties().getProperty(testCase[0]), "1");
//   expected[1] = S.addTwoStrings(PropertiesService.getDocumentProperties().getProperty(testCase[1]), "5");

//   PropertiesHandlerDocument.increment(testCase[0]);
//   result[0] = PropertiesService.getDocumentProperties().getProperty(testCase[0]);
//   // TestUtils.assert(expected[0], result[0]);

//   PropertiesHandlerDocument.incrementBy(testCase[1], 5);
//   result[1] = PropertiesService.getDocumentProperties().getProperty(testCase[1]);
//   TestUtils.assert(expected[1], result[1]);
// }

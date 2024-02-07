
function testDateUtils() {

  let finalListOfTests = [];

    let normalTests = [
        // General
    luxonZoneShouldBeRomaniaByDefault_,

    //toDay()
    shouldReturnTodayWithRomanianFormat_,

    // toLuxonDate()
    shouldReturnLuxonDate_,
    shouldPassWhenDateInputIsToday_, // isToday(dateInput)
    shouldPassWhenDateInputIsNoMoreThenAWeekAgo_ //isThisWeek(dateInput)
    ];

    let interactionTests = [
        
    ];

    if (TestManager.flag.interactionTesting == true) {
        finalListOfTests = normalTests.concat(interactionTests);
    } else {
        finalListOfTests = normalTests;
    }
    
    return finalListOfTests;
}

function luxonZoneShouldBeRomaniaByDefault_() {
  const expected = "Europe/Bucharest";
  let result = luxon.DateTime.now().zoneName;

  TestUtils.assert(result, expected);
}

function shouldReturnTodayWithRomanianFormat_() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so we add 1.
  const year = date.getFullYear();

  const expected = `${day}.${month}.${year}`;

  let result = DateUtils.toDay();
  TestUtils.assert(result.toLocaleString(), expected)
}

function shouldReturnLuxonDate_() {
  
  let sut = [
    luxon.DateTime.fromObject({year: 1999, month: 03, day: 12}), // Luxon date
    "12.03.1999", // Romanian format
    new Date(1999, 2, 12), // JSDate object
    "1999-03-12T00:00:00.000Z", // ISO FORMAT
    "1999-03-12", // SQL FORMAT
    // HTTP FORMAT
];

  let result = sut.map(d => DateUtils.toLuxonDate(d));
  const expected = "12.03.1999";

  result.forEach(r => TestUtils.assert(r.toLocaleString(), expected));
}

function shouldPassWhenDateInputIsToday_() {
  let result = DateUtils.isToday(luxon.DateTime.now());
  const expected = true;
  TestUtils.assert(result, expected, "Should pass if dateInput is valid");
}

function shouldPassWhenDateInputIsNoMoreThenAWeekAgo_() {
  let testCase = [
    luxon.DateTime.now(),
    luxon.DateTime.now().minus({ days: 8 }),
    luxon.DateTime.now().minus({ days: 3 }),
    luxon.DateTime.now().plus({ days: 3 })
  ];
  let result = [
    DateUtils.isThisWeek(testCase[0]),
    DateUtils.isThisWeek(testCase[1]),
    DateUtils.isThisWeek(testCase[2]),
    DateUtils.isThisWeek(testCase[3]),
  ];
  let expected = true;
  TestUtils.assert(result[0], expected);
  TestUtils.assert(result[1], false);
  TestUtils.assert(result[2], expected);
  TestUtils.assert(result[3], expected);
}

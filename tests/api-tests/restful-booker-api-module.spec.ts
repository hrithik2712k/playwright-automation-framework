import { test, expect } from "../../fixtures/hooks-fixtures";
import apiPathData from "../../data/api-data/api-path-data.json";
import restfulApiData from "../../data/api-data/restful-booker-api-module-data.json";
import CommonApiUtils from "../../utils/CommonApiUtils";

test("API Testing", async ({ request }) => {
  const bookingIds = await request.get("booking");

  console.log(await bookingIds.json());
});

// test("API Test 2", async ({ request }) => {
//   const bookingDetails = await request.get(`booking/2`);
//   console.log(await bookingDetails.json());
// });

// test(
//   "Verify that the user is able to fetch all the booking IDs using GET API.",
//   {
//     tag: ["@API", "@UAT"],
//     annotation: {
//       type: "Test Case Link",
//       description: "Link of test case.",
//     },
//   },
//   async ({ request }) => {
//     const bookingIdsResp = await request.get(apiPathData.booking_path);
//     const bookingIdsJsonResp = await bookingIdsResp.json();
//     console.log(bookingIdsJsonResp);
//     expect(bookingIdsResp.status()).toBe(200);
//     expect(bookingIdsResp.statusText()).toBe("OK");
//     // expect(bookingIdsResp.ok()).toBeTruthy();
//     expect(bookingIdsResp.headers()["content-type"]).toBe(
//       restfulApiData.content_type
//     );
//     expect(bookingIdsJsonResp).not.toBeNull();
//   }
// );

// test(
//   "Verify that user is able to fetch booking details for a booking id using GET API and receives valid response..",
//   {
//     tag: ["@API", "@UAT"],
//     annotation: {
//       type: "Test Case Link",
//       description: "Link of test case.",
//     },
//   },
//   async ({ request }) => {
//     const bookingResp = await request.get(
//       `${apiPathData.booking_path}/${restfulApiData.booking_id4}`
//     );
//     const bookingJsonResp = await bookingResp.json();
//     console.log(bookingJsonResp);
//     expect(bookingResp.status()).toBe(200);
//     expect(bookingResp.statusText()).toBe("OK");
//     expect(bookingResp).not.toBeNull();
//     // expect(bookingJsonResp.firstname).toEqual(restfulApiData.firstname);
//   }
// );

// test(
//   "Verify use is able to create new booking using post API and receive valid response",
//   {
//     tag: ["@API", "@UAT"],
//     annotation: {
//       type: "Test Case Link",
//       description: "Link of test case.",
//     },
//   },
//   async ({ request }) => {
//     const createBookingResp = await request.post(apiPathData.booking_path, {
//       data: restfulApiData.create_booking,
//     });

//     const createBookingJsonResp = await createBookingResp.json();
//     expect(createBookingResp.status()).toBe(200);
//     expect(createBookingJsonResp.booking).toMatchObject(
//       restfulApiData.create_booking
//     );
//   }
// );

// test(
//   "Verify the PUT call",
//   {
//     tag: ["@API", "@UAT"],
//     annotation: {
//       type: "Test Case Link",
//       description: "Link of test case.",
//     },
//   },
//   async ({ request, commonApiUtils }) => {
//     const token = await commonApiUtils.createToken();
//     console.log(token);
//     const updateBookingResp = await request.put(
//       `${apiPathData.booking_path}/${restfulApiData.booking_id2}`,
//       {
//         headers: {
//           Cookie: `token=${token}`,
//         },
//         data: restfulApiData.update_booking,
//       }
//     );
//     console.log(updateBookingResp);
//     const updateBookingJsonResp = await updateBookingResp.json();
//     console.log(updateBookingJsonResp);
//     expect(updateBookingResp.status()).toBe(200);
//     expect(updateBookingJsonResp).toMatchObject(restfulApiData.update_booking);
//   }
// );

// test(
//   "Verify the PATCH Call..",
//   {
//     tag: ["@API", "@UAT"],
//     annotation: {
//       type: "Test Case Link",
//       description: "Link of test case.",
//     },
//   },
//   async ({ request, commonApiUtils }) => {
//     const apiToken = await commonApiUtils.createToken();
//     const patchBookingResp = await request.patch(
//       `${apiPathData.booking_path}/${restfulApiData.booking_id2}`,
//       {
//         headers: {
//           Cookie: `token=${apiToken}`,
//         },
//         data: restfulApiData.partial_update_booking,
//       }
//     );

//     console.log(patchBookingResp);
//     const patchBookingJsonResp = await patchBookingResp.json();
//     console.log(patchBookingJsonResp);
//     expect(patchBookingResp.status()).toBe(200);
//     expect(patchBookingJsonResp).toMatchObject(
//       restfulApiData.partial_update_booking
//     );
//   }
// );

// test(
//   "Verify the Delete API Call",
//   {
//     tag: ["@API", "@UAT"],
//     annotation: {
//       type: "Test Case Link",
//       description: "Link of test case.",
//     },
//   },
//   async ({ request, commonApiUtils }) => {
//     const apiToken = await commonApiUtils.createToken();
//     const deleteBookingResp = await request.delete(
//       `${apiPathData.booking_path}/${restfulApiData.booking_id3}`,
//       {
//         headers: {
//           Cookie: `token=${apiToken}`,
//         },
//       }
//     );

//     expect(deleteBookingResp.status()).toBe(201);
//     expect(deleteBookingResp.statusText()).toBe("Created");

//     const getBookingResp = await request.get(
//       `${apiPathData.booking_path}/${restfulApiData.booking_id3}`
//     );

//     expect(getBookingResp.status()).toBe(404);
//     expect(getBookingResp.statusText()).toBe("Not Found");
//   }
// );

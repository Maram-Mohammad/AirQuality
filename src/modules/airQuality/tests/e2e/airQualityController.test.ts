import request from "supertest";
import app from '../../../../app';

describe('Air Qualiy CRUD Operations', () => {
let apiUrl = `/airQuality`;
  
  function getDummyData(){
    return{
      // _id: '555555',
      ts: '2019-08-04T01',
      aqius: 55,
      mainus: "p2",
      aqicn: 20,
      maincn: "p2",
    };
  };
  // beforeAll(async () => {
  //   await setupMongo();
  // });
  
      
  test('create new item', async () => {
    const item = getDummyData();
    const response = await request(app).post(apiUrl).send(item)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');
    expect(response.status).toBe(201);

    let itemId = response.body._id;
    const response2 = await request(app).get(apiUrl.concat(`/${itemId}`));
    expect(response2.status).toBe(200);
  });


  test('retrieve item not found from db', async() => {
    let itemId = "5fecb621b5e206e25c39c4cf";
    const response = await request(app).get(apiUrl.concat(`/${itemId}`));
    expect(response.status).toBe(404);
  });


  // afterAll(async () => {
  //   await teardownMongo();
  // });
 
});




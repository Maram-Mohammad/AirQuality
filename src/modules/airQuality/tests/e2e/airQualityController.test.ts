import request from "supertest";
import app from '../../../../app';

describe('Air Qualiy CRUD Operations', () => {
let apiUrl = `http://localhost:5050/airQuality`;
  
  function getDummyData(){
    return{
      id:0,
      _id: 0 ,
      ts: '2019-08-04T01',
      aqius: 55,
      mainus: "p2",
      aqicn: 20,
      maincn: "p2",
    };
  };

    beforeEach(() => {
        // let apiUrl = `http://localhost:4000/airQuality`;
    });
    
    
  

  test('create new item', async () => {
    const item = getDummyData();
    const response = await request(app).post(apiUrl).send(item)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');
    
    expect(response.status).toBe(201);
  });

  test('retrieve item from db', async() => {
    const itemId = getDummyData().id;
    const response = await request(app).get(apiUrl.concat(`/${itemId}`));
    expect(response).not.toBeNull();
  });

  test('Delete item', async () => {
    const itemId = getDummyData().id;
    const response = await request(app).delete(apiUrl.concat(`/${itemId}`));
    expect(response.status).toBe(200);
  });

  test('get Deleted item', async () => {
    const itemId = getDummyData().id;
    const response = await request(app).get(apiUrl.concat(`/${itemId}`));
    expect(response.status).toBe(404);
  });

 
});




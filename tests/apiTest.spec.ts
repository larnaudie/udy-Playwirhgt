import { test, expect } from "@playwright/test";
import { exec } from "child_process";

test("Get user Details using GET method", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users?page=2");
  let responseJSON = await response.json();
  console.log(responseJSON);
  expect(response.status()).toBe(200);
  expect(responseJSON.data[0].first_name).toBe("Michael");
});

let userId;

test("Create an user Details using POST method", async ({ request }) => {
    let user = {
      "name": "pablo",
      "job": "leader"
    }
    const response = await request.post("https://reqres.in/api/users", {
      data: user,
      headers: {
          "ACCEPT": "application/json"
      }
    })
    let responseJSON = await response.json();
    expect(response.status()).toBe(201);
    expect(responseJSON.name).toBe("pablo");
    expect(responseJSON.job).toBe("leader");
    userId = responseJSON.id;
    expect(responseJSON.id).toBe(userId);
  });

  test("Update an user Details using PUT method", async ({ request }) => {
    let user = {
      "name": "Alain",
      "job": "worker"
    }
    const response = await request.put("https://reqres.in/api/user/" + userId, {
      data: user,
      headers: {
          "ACCEPT": "application/json"
      }
    })
    let responseJSON = await response.json();
    expect(response.status()).toBe(200);
    expect(responseJSON.name).toBe("Alain");
    expect(responseJSON.job).toBe("worker");
    userId = responseJSON.id;
    expect(responseJSON.id).toBe(userId);
  });

  test("Delete an user Details using Delete method", async ({ request }) => {
    const response = await request.delete("https://reqres.in/api/user/" + userId);
    expect(response.status()).toBe(204);

    const response2 = await request.get("https://reqres.in/api/user/" + userId);
    console.log(response2.json());
  });
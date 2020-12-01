const request = require("supertest");
const { expect } = require("chai");
const app = require("../app");

// get /api/v1/members

describe("/api/v1/members", () => {
  describe("GET method", () => {
    it("should return the list of members", (done) => {
      request(app)
        .get("/api/v1/members")
        .expect(200)
        .end((err, res) => {
          if (err) {
            return done(err);
          }

          expect(res.body.length).to.equal(10);
          expect(res.body[0].id).to.equal(1);
          expect(res.body[0].name).to.equal("Clara");
          expect(res.body[0].title).to.equal("Mother");
          done();
        });
    });
  });
});

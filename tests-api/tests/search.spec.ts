import * as request from "supertest";
import { searchForProduct } from "../api/search";

describe('SEARCH', function() {
  it('should get valid response', async function() {

    const query = 'New'

    const response = await searchForProduct(query)
    expect(response.status).toEqual(200)

    const edges = response.body.data.suggest.edges;
    const size = edges.length

    expect(size).toEqual(8);

    for(let i = 0; i < size; i++) {      
      expect(edges[i].node.highlight.toUpperCase()).toContain(query.toUpperCase())
    }
  })
})
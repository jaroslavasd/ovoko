import * as request from "supertest";

describe('SEARCH', function() {
  it('should get valid response', async function() {

    const query = 'New'

    const response = await request('https://rrr.lt')
      .post('/graphql')
      .set('content-type', 'application/json')
      .send('{"query":"\\n    query getSuggest($query: String\u0021, $highlightStart: String, $highlightEnd: String, $first: Int, $after: String) {\\n  suggest(\\n    query: $query\\n    input: {query: $query, highlightStart: $highlightStart, highlightEnd: $highlightEnd}\\n    first: $first\\n    after: $after\\n  ) {\\n    edges {\\n      node {\\n        ...SuggestData\\n      }\\n    }\\n  }\\n}\\n    \\n    fragment SuggestData on Suggest {\\n  oldTitle\\n  oldUrl\\n  highlight\\n}\\n    ","variables":{"query":"' + query + '","highlightStart":"<strong>","highlightEnd":"</strong>","first":8,"after":""},"operationName":"getSuggest"}')

    expect(response.status).toEqual(200)

    const edges = response.body.data.suggest.edges;
    const size = edges.length

    expect(size).toEqual(8);

    for(let i = 0; i < size; i++) {      
      expect(edges[i].node.highlight.toUpperCase()).toContain(query.toUpperCase())
      
      // expect(edges[i].node).toEqual(expect.objectContaining({
      //   oldTitle: expect.stringContaining(query)
      // }))
    }
  })
})
import { ContentNodeQueryResult } from '../src/components/NodeList'

export function getNodesMockData(numberOfNodes: number = 1): { data: ContentNodeQueryResult } {
    const mockResponse: ContentNodeQueryResult = {
        Admin: {
            Tree: {
                GetContentNodes: {
                    edges: []
                }
            }
        }
    }

    for (let i = 0; i < numberOfNodes; i++) {
        mockResponse.Admin.Tree.GetContentNodes.edges.push({
            node: {
                id: `id-${i}`,
                structureDefinition: {
                    title: `Title ${i}`
                }
            }
        })
    }
    return { data: mockResponse }
}

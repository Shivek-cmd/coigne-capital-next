export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  expertise: string;
  regions: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "michael-richardson",
    name: "Michael Richardson",
    title: "Founder & Principal Advisor",
    bio: "Michael brings over 25 years of experience in cross-border governance, corporate structuring, and strategic advisory across the Americas. His expertise spans holding company design, shareholder governance, and complex multi-jurisdictional transactions.",
    expertise: "Cross-border governance, holding company design, shareholder agreements, strategic advisory",
    regions: "Canada, United States, Latin America",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/pRIwWjRtVIFIvlUKCKyE7B/sandbox/HvGoYRderzWEDsyeUrC6rC-img-1_1770322301000_na1fn_dGVhbS1tZW1iZXItMQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcFJJd1dqUnRWSUZJdmxVS0NLeUU3Qi9zYW5kYm94L0h2R29ZUmRlcnpXRURzeWVVckM2ckMtaW1nLTFfMTc3MDMyMjMwMTAwMF9uYTFmbl9kR1ZoYlMxdFpXMWlaWEl0TVEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=O~e7FByA5niDPjXjvk72crZ67XKwzl9JHrpMtOvd2WFq1CB5MRQfLIG81bVUnLqzBZPXyGU5-PItOoHEUg3dqPdoU4cADCGOn~zo0vN9j5kMOSjvJyYkmdKWPaYisl2ZD17vjI15NzTVlnxuGOx8zkzC1ujXjUPk6wIO7fGYwUK94za3owh6Yv4C6-GC4HEYTqy747AkIogzH-r1~l2Ft3HkLONiDxz5xNfGx1EvE8b8oNGMRGfTBVAC~yx3wJfRS28UteyvCUgYaP5eS7qKNXynKYmFQYFw292oDIpvyTHguG3wczrMazfrofqy0XWs0vgzqJZSoZVMLAnFYoVUMQ__",
  },
  {
    id: "sarah-martinez",
    name: "Sarah Martinez",
    title: "Partner, Latin America Practice",
    bio: "Sarah specializes in Latin American market entry and cross-border capital structures. With deep relationships across Mexico, Colombia, Brazil, and Central America, she guides families and businesses through complex regulatory landscapes.",
    expertise: "Latin American market entry, capital structuring, regulatory compliance, partnership facilitation",
    regions: "Mexico, Colombia, Brazil, Central America",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/pRIwWjRtVIFIvlUKCKyE7B/sandbox/HvGoYRderzWEDsyeUrC6rC-img-2_1770322294000_na1fn_dGVhbS1tZW1iZXItMg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcFJJd1dqUnRWSUZJdmxVS0NLeUU3Qi9zYW5kYm94L0h2R29ZUmRlcnpXRURzeWVVckM2ckMtaW1nLTJfMTc3MDMyMjI5NDAwMF9uYTFmbl9kR1ZoYlMxdFpXMWlaWEl0TWcuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Df8tJ6jKVrvlJZU6G2iq336osAC3M3sdMS7N1G0de1LU6T8hDzJVSwvAp6BWXPUHgjhqT9P2TQM7X9mps4t5fwdopgg5IClDYZ14xBsCzqUm4fRiexmzF54CARcEjoqp2N-1ot426B8ioiHTIEuOdoeKrG-J2Al~w0Sw03m86j31rSuoUE7D4eAn4khzzlOQpcRlz8peK84pdOJblWqhbGlUwqEsENELwAObDTV2oRBIJik2bI8x42xGEFYOzChqojo3xYxBMLdegEx3R-aqMEdXya90O35DL0w2vP84BxgX0DwPJOTPuWeiFPszBB2pTyhJnfU3uLZAQ7iXVCeBag__",
  },
  {
    id: "james-chen",
    name: "James Chen",
    title: "Partner, Risk & Insurance Strategy",
    bio: "James is an expert in advanced risk governance and insurance strategy for high-net-worth families and corporations. He designs comprehensive protection frameworks that address cross-border vulnerabilities.",
    expertise: "Risk governance, advanced insurance strategies, wealth protection, compliance frameworks",
    regions: "Canada, United States",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/pRIwWjRtVIFIvlUKCKyE7B/sandbox/HvGoYRderzWEDsyeUrC6rC-img-3_1770322302000_na1fn_dGVhbS1tZW1iZXItMw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcFJJd1dqUnRWSUZJdmxVS0NLeUU3Qi9zYW5kYm94L0h2R29ZUmRlcnpXRURzeWVVckM2ckMtaW1nLTNfMTc3MDMyMjMwMjAwMF9uYTFmbl9kR1ZoYlMxdFpXMWlaWEl0TXcuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=v31AlWJS9NPDOhK34NtzL-9xt8p~VDfsmzmkuVD7oENhGxBECpkGzessdZ6ZShJ7Vs2ZHo~IUyDYnQNINU7tJcKSSyvVRVwYnACJfQU0gPU~j1KGXodcJRLdFHWEm5wzpkkhcFNtfxgxF0rBtNKobRE84j7oKvgY0uxiSAtDgM6rUGVnOZ5vVIEQsNjGWffYGCzC346-Qm84jtX4ySopmWu1HeQXbgkf5iG56U7lulTVn~5sdOJvWqKSDDqVphl1t5llIuMl7FQ4w5C~xqGlJmvdSqS6wk4fSWeRprblIp-~G8sfcK1W3vm4Czx3IdkQ4W5L9F8A2I~KrIwS9TPKdA__",
  },
  {
    id: "patricia-rodriguez",
    name: "Patricia Rodriguez",
    title: "Partner, Capital Strategy",
    bio: "Patricia leads capital planning and financial strategy engagements, bringing extensive experience in liquidity events, wealth preservation, and cross-border tax optimization for families and founder-led businesses.",
    expertise: "Capital planning, financial strategy, liquidity events, tax optimization, wealth preservation",
    regions: "Canada, United States, Mexico",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/pRIwWjRtVIFIvlUKCKyE7B/sandbox/HvGoYRderzWEDsyeUrC6rC-img-4_1770322304000_na1fn_dGVhbS1tZW1iZXItNA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcFJJd1dqUnRWSUZJdmxVS0NLeUU3Qi9zYW5kYm94L0h2R29ZUmRlcnpXRURzeWVVckM2ckMtaW1nLTRfMTc3MDMyMjMwNDAwMF9uYTFmbl9kR1ZoYlMxdFpXMWlaWEl0TkEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=N3eeCxt1AAyPGzwRXY1VBOl1fNcF3PkyuO4Qk-2QrcE-45Mb4Jqmfo90s53afYugaNTw7AK3faMVSiDUFHe6-ecwgpoOgsaTmwK2hB2bLFObFQBWm09oTW5LqrntiLDyriZGnnOY3VR8dNbEpyOwTLWeBTdAPwzD1Lxp6LPntd5PPkME3I7SFO0syOsJnvTaYKm-XkPd4zViRQ77r8y2xPlMpAfaYn6tLpcTQ67rrvmmahAQu~cWfTDbHeNnsc~f4-htDSoqMiuaIBMi4v-896XtoMhmLdAizWb4FrfbEz7-J9VGJ48pWuoSGGMrusOytv7OP1I7AqAZWGkpwqO8Tw__",
  },
];

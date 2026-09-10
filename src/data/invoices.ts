import type { Invoice } from "../types/invoice";

export const invoices: Invoice[] = [

  {
  id: "INV-1001",
  customer: "Acme Corporation",
  email: "billing@acme.com",
  issueDate: "2026-08-01",
  dueDate: "2026-08-15",
  amount: 45000,
  status: "Overdue",

  item: [
    {
      id: "ITEM-1",
      description: "Web Development",
      quantity: 1,
      price: 25000,
      total: 25000,
    },
    {
      id: "ITEM-2",
      description: "UI/UX Design",
      quantity: 1,
      price: 10000,
      total: 10000,
    },
    {
      id: "ITEM-3",
      description: "API Integration",
      quantity: 1,
      price: 10000,
      total: 10000,
    },
  ],
},
  {
    id: "INV-1002",
    customer: "TechNova Solutions",
    email: "finance@technova.com",
    issueDate: "2026-08-05",
    dueDate: "2026-09-05",
    amount: 28500,
    status: "Pending",
    item: [
      {
        id: "ITEM-1",
        description: "Mobile App Development",
        quantity: 1,
        price: 15000,
        total: 15000,
      }]
  },
  {
    id: "INV-1003",
    customer: "Global Solutions",
    email: "accounts@global.com",
    issueDate: "2026-08-10",
    dueDate: "2026-08-20",
    amount: 62000,
    status: "Paid",
    item: [
      {
        id: "ITEM-1",
        description: "Cloud Infrastructure Setup",
        quantity: 1,
        price: 40000,
        total: 40000,
      },
      {
        id: "ITEM-2",
        description: "Data Migration",
        quantity: 1,
        price: 22000,
        total: 22000,
      }]
  },
  {
    id: "INV-1004",
    customer: "Bright Technologies",
    email: "accounts@brighttech.com",
    issueDate: "2026-08-12",
    dueDate: "2026-08-25",
    amount: 37500,
    status: "Overdue",
    item: [
      {
        id: "ITEM-1",
        description: "Software Development",
        quantity: 1,
        price: 25000,
        total: 25000,
      },
      {
        id: "ITEM-2", 
        description: "Quality Assurance",
        quantity: 1,
        price: 12500,
        total: 12500,
      }]
  },
  {
    id: "INV-1005",
    customer: "Vertex Industries",
    email: "billing@vertex.com",
    issueDate: "2026-08-15",
    dueDate: "2026-09-15",
    amount: 51000,
    status: "Pending",
    item: [
      {
        id: "ITEM-1",
        description: "IT Consulting",
        quantity: 1,
        price: 30000,
        total: 30000,
      },
      {
        id: "ITEM-2",
        description: "Project Management",
        quantity: 1,
        price: 21000,
        total: 21000,
      }
    ]
  },
  {
    id: "INV-1006",
    customer: "Nova Enterprises",
    email: "finance@nova.com",
    issueDate: "2026-08-18",
    dueDate: "2026-08-30",
    amount: 24000,
    status: "Paid",
    item: [
      {
        id: "ITEM-1",
        description: "Digital Marketing",
        quantity: 1,
        price: 15000,
        total: 15000,
      },
    ]
  },
  {
    id: "INV-1007",
    customer: "PixelWorks Studio",
    email: "billing@pixelworks.com",
    issueDate: "2026-08-20",
    dueDate: "2026-09-20",
    amount: 18500,
    status: "Pending",
    item: [
      {
        id: "ITEM-1", 
        description: "Graphic Design",
        quantity: 1,
        price: 12000,
        total: 12000,
      },
      {
        id: "ITEM-2",
        description: "Branding Consultation",
        quantity: 1,
        price: 6500,
        total: 6500,
      }
    ] 
  },
  {
    id: "INV-1008",
    customer: "CloudNine Technologies",
    email: "accounts@cloudnine.com",
    issueDate: "2026-08-22",
    dueDate: "2026-09-01",
    amount: 72000,
    status: "Overdue",
    item: [
      {
        id: "ITEM-1",
        description: "Cloud Infrastructure",
        quantity: 1,
        price: 45000,
        total: 45000,
      },
      {
        id: "ITEM-2",
        description: "Data Analytics",
        quantity: 1,
        price: 27000,
        total: 27000,
      }
    ] 
  },
  {
    id: "INV-1009",
    customer: "Apex Systems",
    email: "finance@apex.com",
    issueDate: "2026-08-25",
    dueDate: "2026-09-25",
    amount: 33000,
    status: "Paid",
    item: [
      {
        id: "ITEM-1",
        description: "IT Consulting",
        quantity: 1,
        price: 30000,
        total: 30000,
      }
    ]
  },
  {
    id: "INV-1010",
    customer: "BluePeak Technologies",
    email: "billing@bluepeak.com",
    issueDate: "2026-08-28",
    dueDate: "2026-09-28",
    amount: 46500,
    status: "Pending",
    item: [
      {
        id: "ITEM-1",
        description: "Software Development",
        quantity: 1,
        price: 30000,
        total: 30000, 
      },
      {
        id: "ITEM-2",
        description: "UI/UX Design",
        quantity: 1,
        price: 16500,
        total: 16500,
      }
    ]
  },
  {
    id: "INV-1011",
    customer: "GreenField Industries",
    email: "accounts@greenfield.com",
    issueDate: "2026-08-30",
    dueDate: "2026-09-10",
    amount: 39500,
    status: "Overdue",
    item: [
      {
        id: "ITEM-1",
        description: "Product Development",
        quantity: 1,
        price: 25000,
        total: 25000,
      },
      {
        id: "ITEM-2", 
        description: "Quality Assurance",
        quantity: 1,
        price: 14500,
        total: 14500,
      }
    ]
  },
  {
    id: "INV-1012",
    customer: "UrbanEdge Solutions",
    email: "billing@urbanedge.com",
    issueDate: "2026-09-01",
    dueDate: "2026-09-30",
    amount: 27500,
    status: "Pending",
    item: [
      {
        id: "ITEM-1",
        description: "Digital Marketing",
        quantity: 1,
        price: 15000,
        total: 15000,
      },
      {
        id: "ITEM-2",
        description: "Social Media Management",
        quantity: 1,
        price: 12500,
        total: 12500,
      }
    ]
  },
  {
    id: "INV-1013",
    customer: "Skyline Digital",
    email: "finance@skylinedigital.com",
    issueDate: "2026-09-02",
    dueDate: "2026-09-12",
    amount: 58500,
    status: "Paid",
    item: [
      {
        id: "ITEM-1",
        description: "Content Creation",
        quantity: 1,
        price: 30000,
        total: 30000,
      },
      {
        id: "ITEM-2",
        description: "SEO Optimization",
        quantity: 1,
        price: 28500,
        total: 28500,
      }
    ]
  },
  {
    id: "INV-1014",
    customer: "Vertex Consulting",
    email: "accounts@vertexconsulting.com",
    issueDate: "2026-09-04",
    dueDate: "2026-09-18",
    amount: 42000,
    status: "Pending",
    item: [
      {
        id: "ITEM-1",
        description: "Business Strategy",
        quantity: 1,
        price: 25000,
        total: 25000,
      },
      {
        id: "ITEM-2",
        description: "Market Research",
        quantity: 1,
        price: 17000,
        total: 17000,
      }
    ]
  },
  {
    id: "INV-1015",
    customer: "PrimeCore Industries",
    email: "billing@primecore.com",
    issueDate: "2026-09-06",
    dueDate: "2026-09-16",
    amount: 68500,
    status: "Overdue",
    item: [
      {
        id: "ITEM-1",
        description: "Product Development",
        quantity: 1,
        price: 40000,
        total: 40000,
      },
      {
        id: "ITEM-2",
        description: "Quality Assurance",
        quantity: 1,
        price: 28500,
        total: 28500,
      }
    ]
  },
];
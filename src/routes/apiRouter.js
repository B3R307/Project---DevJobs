const Router = require(`express`).Router;

const apiRouter = Router()



apiRouter.get('/', (req, res)=>{
  res.json({
    '/api/jobs' : 'Show jobs',
    '/api/companies' : 'Show companies'
  })
})

apiRouter.get('/jobs', (req, res)=>{
  res.json([
    {
    title: 'SQL Server Administrator - Postgres',
   description: 'Bring to the table win-win survival strategies to ensure proactive domination. User generated "content" in real-time will have multiple touchpoints for offshoring.',
   location: 'Guadalajara',
   salary: 27000,
   fullTime: true,
   companyId: 1
 },
 {
   title: 'UX Engineer',
   description: 'Override the digital divide with additional clickthroughs from DevOps. Leverage agile frameworks to provide a robust synopsis for high level overviews.',
   location: 'Monterrey',
   salary: 35000,
   fullTime: true,
   companyId: 1
 },
 {
    title: 'API Architect',
    description: 'Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.',
    location: 'Ciudad de Mexio',
    salary: 39000,
    fullTime: true,
    companyId: 2
  },
  {
    title: 'Mid-Level Front End Engineer',
    description: 'Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.',
    location: 'Ciudad de Mexico',
    salary: 21000,
    fullTime: false,
    companyId: 2
  }
 ])
})

  apiRouter.get('/companies', (req, res)=>{
    res.json([
      {
    name: 'Company ABC',
    description: 'Energistically network alternative technology deploying impactful partnerships.',
    imageLink: 'http://www.tinygraphs.com/labs/isogrids/hexa16/nsuaio',
    location: 'Guadalajara'
  },
  {
    name: 'Lossless Enterprises',
    description: 'Quickly strategizing team driven "outside the box" thinking.',
    location: 'Ciudad de Mexico',
    imageLink: 'http://www.tinygraphs.com/labs/isogrids/hexa16/8282',
  }
    ])
  })


module.exports = apiRouter

const companyDataRows = [
  {
    name: 'EWP Technologies',
    description: 'Our business grows milestones to reliably and effectively facilitate our wholesale user experience. Iteratively touching base about leveraging verticals will make us leaders in the mission critical enterprise industry. Efficiencies will come from strategically investing our clouds.',
    image_link: 'http://www.tinygraphs.com/labs/isogrids/hexa16/1234',
    location: 'Guadalajara'
  },
  {
    name: 'SPC Software Solutions',
    description: 'Our business offshores architectures to dynamically and reliably reuse our best-of-breed vertical. Efficiencies will come from iteratively deep-diving our step-changes. Strategically touching base about integrating prince2 practitioners will make us leaders in the world-class enterprise industry. Effectively transforming conservatively best-in-class organic growths is crucial to our next-generation alignment.',
    location: 'Ciudad de Mexico',
    image_link: 'http://www.tinygraphs.com/labs/isogrids/hexa16/9900',
  },
  {
    name: 'CACI International',
    description: `We use our knowledge transfer low hanging fruit to dynamically manage our deliverable expectations. Efficiencies will come from virtually investing our emerging markets. It's critical that we give 110% when iteratively connecting diversities.`,
    location: 'Ciudad de Mexico',
    image_link: 'http://www.tinygraphs.com/labs/isogrids/hexa16/s422',
  },
  {
    name: 'Arrowhead Systems',
    description: `We thrive because of our immersive alignment and mobile user experience culture. We aim to strategically impact our innovation by ethically facilitating our best-of-breed actionable paradigm shifts. We use our value-added architectures to reliably manage our prince2 practitioner expectations.`,
    location: 'Monterrey',
    image_link: 'http://www.tinygraphs.com/labs/isogrids/hexa16/311213',
  },

]


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert(companyDataRows);
        });
    };

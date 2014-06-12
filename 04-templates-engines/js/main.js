requirejs.config({
  baseUrl: 'js',
});

// 
requirejs(['underscore','handlebars'],
function   (_,Handlebars) {

  var data = {
    name: 'Scott Kennedy',
    overview: [
      {name: 'Current',value:'Business Development Manager - Fabrication Division at AZCO INC'},
      {name: 'Past', value:'Sales Manager - Fabrication Division at AZCO INC.'},
      {name: 'Education', value:'University of Wisconsin-Green Bay - Fox Valley Technical College'}
    ],
    xp: [
      {title:'Business Development Manager - Fabrication Division',descr:'August 2012 – Present (1 year 11 months)'}
    ],
    skills: [
      'Contract Negotiation','Metal Fabrication',
      'Piping','Construction','Purchasing','Process Scheduler',
      'Project Estimation','Construction Management'
    ]
  },
    template_underscore = document.getElementById('_').innerHTML,
    template_handlebars = document.getElementById('handlebars').innerHTML,
    target = document.getElementById('content');
    
    // Parse Underscore
    target.innerHTML = _.template(template_underscore,data);
    // Parse Handlebars
    // var hb_template = Handlebars.compile(template_handlebars);
    // target.innerHTML = hb_template(data);
});
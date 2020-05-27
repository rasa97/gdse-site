const refs = {
    'sm2008' : 'Sooraj Pratap, P., & Mohapatra, K.J. (2008). Modeling the 24-h software development process. Strategic Outsourcing: An International Journal, 1(2), 122-141',
    'ce2017' : 'Carmel, E. (2017). Building Your Information Systems from the Other Side of the World: How Infosys Manages Time Zone Differences. Retrieved from undefined website.',
    'krolletal13' : 'Kroll, J., Hashmi, S. I., Richardson, I., & Audy, J. L. (2013). A systematic literature review of best practices and challenges in follow-the-sun software development. In Global Software Engineering Workshops (ICGSEW), 2013 IEEE 8th International Conference on (pp. 18-23). IEEE.',
    'kroll13' : 'Kroll, J. (2013). Researching into Follow-the-Sun Software Development: Challenges and Opportunities. Www.Academia.Edu.',
    'Agerfalk05' : 'Ågerfalk, P., Fitzgerald, B., Holmström, H., Lings, B., Lundell, B., & Ó Conchúir, E. (2005). A framework for considering opportunities and threats in distributed software development.',
    'oconchuir2009' : 'Ó Conchúir, E., Holmström Olsson, H., Ågerfalk, P. J., & Fitzgerald, B. (2009). Benefits of global software development: exploring the unexplored. Software Process: Improvement and Practice, 14(4), 201–212.',
    'treinen2016' : 'Treinen, J. J., & Miller-Frost, S. L. (2006). Following the sun: Case studies in global software development. IBM Systems Journal, 45(4), 773–783.',
    'conchuir2006' : 'Ó Conchúir, Holmström, Ågerfalk, & Fitzgerald, (2006). Global Software Development: Never Mind the Problems -Are There Really Any Benefits?',
    'carmel2001' : 'Carmel, E., & Agarwal, R. (2001). Tactical approaches for alleviating distance in global software development. IEEE Software, 18(2), 22–29.',
    'ebert' : 'Ebert, C., & De Neve, P. (2001). Surviving global software development. IEEE Software, 18(2), 62–69.',
    'sangheonlee07' : 'Sangheon Lee, D. M. and J. C. M. (2007). Working time around the world. In www.ilo.org.',
    'carmel2010' : 'Carmel, E., Espinosa, J. A., & Dubinsky, Y. (2010). “Follow the Sun” Workflow in Global Software Development. Journal of Management Information Systems, 27(1), 17–38.',
    'carmel2009' : 'Carmel, E., Espinosa, J. A., & Dubinsky, Y. (2009). Follow The Sun Software Development: New Perspectives, Conceptual Foundation, and Exploratory Field Study. Hawaii International Conference.',
    'herbsleb2001' : 'Herbsleb, J. D., & Moitra, D. (2001). Global software development. IEEE Software, 18(2), 16-20.',
    'ramasubbu2007' : 'Ramasubbu, N. & Balan, R. (2007). Globally distributed software development project performance: An empirical analysis. 125-134.',
    'espinosa2003' : 'Espinosa, J., & Carmel, E. (2003). Modeling Coordination Costs Due to Time Separation in Global Software Teams.',
    'vesey1992' : 'Vesey, J. T. (1992). Time-to-market: Put speed in product development. Industrial Marketing Management, 21(2), 151-158.',
    'yapnd' : 'Yap, M. (n.d.). Follow the sun: distributed extreme programming development. Agile Development Conference (ADC’05).'
}

$(function () {
    $('[data-toggle="popover"]').popover()
})

$(".refText").click(function(){
    $("#"+event.target.id).attr("data-content", refs[event.target.id.split('_')[0]]);
});

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
    'sangheonlee07' : 'Sangheon Lee, D. M. and J. C. M. (2007). Working time around the world. In www.ilo.org.'
}

$(function () {
    $('[data-toggle="popover"]').popover()
})

$(".refText").click(function(){
    $("#"+event.target.id).attr("data-content", refs[event.target.id.split('_')[0]]);
});

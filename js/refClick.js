const refs = {
    'sm2008' : 'Sooraj Pratap, P., & Mohapatra, K.J. (2008). Modeling the 24-h software development process. Strategic Outsourcing: An International Journal, 1(2), 122-141',
    'ce2017' : 'Carmel, E. (2017). Building Your Information Systems from the Other Side of the World: How Infosys Manages Time Zone Differences. Retrieved from undefined website.'
}

$(function () {
    $('[data-toggle="popover"]').popover()
})

$(".refText").click(function(){
    $("#"+event.target.id).attr("data-content", refs[event.target.id.split('_')[0]]);
});
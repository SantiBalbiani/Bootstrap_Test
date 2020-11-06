$(function(){
    $("[data-toggle='popover']").popover();
    $("[data-toggle='tooltip']").tooltip();
    $('.carousel').carousel({
      interval: 2000
    });

    $("#contacto").on('show.bs.modal', function(e){
      $("#contactoBtn").removeClass('btn-danger');  
      $("#contactoBtn").addClass('btn-primary');
    })

    $("#contacto").on('hidden.bs.modal', function(e){
      $("#contactoBtn").prop('disabled', true);
    });
  })
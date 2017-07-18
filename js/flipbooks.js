<script>
    $('document').ready(function(){
      var flipbooks = ".left-menu";
      var titleClass = " .views-row .views-field-title";
      var flipbookContainers = document.querySelectorAll(flipbooks + " .views-row");
      var urlFlipbooks = document.querySelectorAll(flipbooks + " .views-row a");
      var titleContainers = document.querySelectorAll(flipbooks + titleClass);
      var titleValues = document.querySelectorAll(flipbooks + titleClass + " span");

      buildModalButtons (titleContainers, titleValues, flipbooks + titleClass);
      buildModalViews(titleValues, urlFlipbooks, flipbookContainers, flipbooks);
    });

    function buildModalButtons (titlesContainersArray, titlesArray, containerClass) {
      if ((titlesContainersArray.length > 0)) {
        for (var i = 0; i < titlesContainersArray.length; i++) {
          var modalButtonStartTag = "<button type='button' class='btn btn-info btn-lg' data-toggle='modal' data-target='#imageModal";
          var modalButtonFinishTag = "'></button>";
          var modalButton = modalButtonStartTag + i + modalButtonFinishTag;
          titlesContainersArray[i].innerHTML = modalButton;
          var titlesButtons = document.querySelectorAll(containerClass + " button");
          titlesButtons[i].appendChild(titlesArray[i]);
        }
      }
    }

    function buildModalViews(titlesArray, urlArray, itemContainersArray, galleryClass) {
      if ((urlArray.length == titlesArray.length) && (urlArray.length > 0)) {
        for (var i = 0; i < urlArray.length; i++) {
          var modalView = getModalView(titlesArray[i].textContent, i);
          var modalViewContainer = document.createElement('div');
          modalViewContainer.innerHTML = modalView;
          itemContainersArray[i].appendChild(modalViewContainer);
          var modalBodyArray = document.querySelectorAll(galleryClass + " .modal-body");
          var modalIframe = getModalIframe(urlArray[i].href);
          var modalIframeContainer = document.createElement('div');
          modalIframeContainer.innerHTML = modalIframe;
          modalBodyArray[i].appendChild(modalIframeContainer);
        }
      }
    }

    function getModalIframe(href) {
      return "<iframe src='"+ href + "' width='100%' height='100%'></iframe>";
    }

    function getModalView(modalTitle, index) {
      var modalViewStarTag = "<div id='imageModal"+ index + "' class='modal fade' role='dialog'><div class='modal-dialog modal-lg'><div class='modal-content'>";
      var modalHeaderStarTag = "<div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button><h4 class='modal-title'>";
      var modalHeaderFinishTag = "</h4></div>";
      var modalHeaderTag = modalHeaderStarTag + modalTitle + modalHeaderFinishTag;
      var modalBodyTag = "<div class='modal-body'></div>";
      var modalViewFinishTag = "</div></div></div>";
      var modalView = modalViewStarTag + modalHeaderTag + modalBodyTag + modalViewFinishTag;
      return modalView;
    }
</script>

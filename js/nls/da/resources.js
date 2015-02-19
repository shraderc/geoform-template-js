﻿define(
   ({
    map: {
      error: "Kan ikke oprette kort"
    },
    onlineStatus: {
      offline: "Du arbejder offline på nuværende tidspunkt. Formularafsendelser vil blive gemt lokalt, indtil der oprettes forbindelse til serveren.",
      reconnecting: "Opretter forbindelse igen&hellip;",
      pending: "${total} ventende redigeringer sendes, når netværksforbindelsen genoprettes."
    },
    configure: {
      mapdlg: {
        items: {
          organizationLabel: "Min organisation",
          onlineLabel: "ArcGIS Online",
          contentLabel: "Mit indhold",
          favoritesLabel: "Mine favoritter"
        },
        title: "Vælg webkort",
        searchTitle: "Søg",
        ok: "OK",
        cancel: "Annullér",
        placeholder: "Angiv søgeterm"
      },
      groupdlg: {
        items: {
          organizationLabel: "Min organisation",
          onlineLabel: "ArcGIS Online",
          contentLabel: "Mit indhold",
          favoritesLabel: "Mine favoritter"
        },
        title: "Vælg gruppe",
        searchTitle: "Søg",
        ok: "OK",
        cancel: "Annullér",
        placeholder: "Angiv søgeterm"
      },
      sharedlg: {
        items: {},
        mailtoLinkDescription: "Her er et link til en GeoForm"
      }
    },
    user: {
      mgrs: "MGRS",
      usng: "USNG",
      utm: "UTM",
      utm_northing: "Nordlig",
      utm_easting: "Østlig",
      utm_zone_number: "Zonenummer",
      selectLayerTabText: "${formSection} Vælg formular",
      geoFormGeneralTabText: "${formSection} Indtast oplysninger",
      locationInformationText: "${formSection} Vælg placering",
      submitInformationText: "${formSection} Fuldfør formular",
      submitInstructions: "Føj disse oplysninger til kortet.",
      myLocationText: "Nuværende placering",
      locationDescriptionForMoreThanOneOption: "Angiv en placering til din post ved at klikke på/berøre kortet eller vha. en af følgende muligheder.",
      locationDescriptionForOneOption: "Angiv placeringen af denne post ved at klikke/trykke på kortet eller ved at bruge følgende indstilling.",
      locationDescriptionForNoOption: "Angiv placeringen af denne post ved at klikke/trykke på kortet .",
      addressText: "Søg",
      geographic: "Bredde-/længdegrad",
      locationTabText: "Sted",
      locationPopupTitle: "Sted",
      submitButtonText: "Send post",
      submitButtonTextLoading: "Sender&hellip;",
      formValidationMessageAlertText: "Følgende felter er obligatoriske:",
      selectLocation: "Vælg en placering til din afsendelse.",
      emptylatitudeAlertMessage: "Vælg en koordinat for ${openLink}breddegrad${closeLink}.",
      emptylongitudeAlertMessage: "Vælg en koordinat for ${openLink}længdegrad${closeLink}.",
      shareUserTitleMessage: "Tak for dit bidrag!",
      entrySubmitted: "Din post er sendt til kortet.",
      shareThisForm: "Del denne formular",
      shareUserTextMessage: "Bed andre om at bidrage vha. følgende indstillinger.",
      addAttachmentFailedMessage: "Kan ikke tilføje vedhæftning til laget",
      addFeatureFailedMessage: "Kan ikke føje objekt til laget",
      noLayerConfiguredMessage: "Der opstod en fejl ved indlæsning eller søgning efter et redigérbart vektorlag. Føj et redigérbart vektorlag til webkortet for at få formularen vist og starte indsamlingen af afsendelserne.",
      placeholderLatitude: "Bredde (Y)",
      placeholderLongitude: "Længde (X)",
      latitude: "Breddegrad",
      longitude: "Længdegrad",
      findMyLocation: "Find mig",
      finding: "Finder&hellip;",
      backToTop: "Tilbage til toppen",
      addressSearchText: "Din afsendelse vil blive vist her. Du kan trække nålen til den korrekte position.",
      shareModalFormText: "Formular-link",
      close: "Luk",
      locationNotFound: "Sted ikke fundet.",
      setLocation: "Angiv placering",
      find: "Find adresse eller sted",
      attachment: "Vedhæftning",
      toggleDropdown: "Skift rullemenu",
      invalidString: "Indtast en gyldig værdi.",
      invalidSmallNumber: "Indtast et gyldigt ${openStrong}heltal${closeStrong} mellem -32768 og 32767.",
      invalidNumber: "Indtast et gyldigt ${openStrong}heltal${closeStrong} mellem -32768 og 32767.",
      invalidFloat: "Indtast en gyldig ${openStrong}flydende punkt${closeStrong}-værdi.",
      invalidDouble: "Indtast en gyldig ${openStrong}dobbelt${closeStrong} værdi.",
      invalidLatLong: "Angiv gyldige koordinater for bredde- og længdegrader.",
      invalidUTM: "Angiv gyldige UTM-koordinater.",
      invalidUSNG: "Angiv gyldige USNG-koordinater.",
      invalidMGRS: "Angiv gyldige MGRS-koordinater.",
      geoformTitleText: "GeoFormular",
      domainDefaultText: "Vælg&hellip;",
      applyEditsFailedMessage: "Beklager, men din post kan ikke sendes. Prøv igen.",
      requiredFields: "Der opstod fejl. Ret dem nedenfor.",
      requiredField: "(obligatorisk)",
      error: "Fejl",
      textRangeHintMessage: "${openStrong}Hint:${closeStrong} Minimumværdi ${minValue} og maksimumværdi ${maxValue}",
      dateRangeHintMessage: "${openStrong}Hint:${closeStrong} Minimumdato ${minValue} og maksimumdato ${maxValue}",
      remainingCharactersHintMessage: "${value} resterende tegn",
      mapFullScreen: "Fuld skærm",
      mapRestore: "Restore",
      filterSelectEmptyText: "Vælg",
      invalidLayerMessage: "Formularlag findes ikke. Konfigurér applikationen, og indstil laget.",
      selectedLayerText: "ALLE",
      fileUploadStatus: "Filoverførselsstatus",
      uploadingBadge: "&nbsp;Overfører&hellip;",
      successBadge: "&nbsp;Overført",
      retryBadge: "Prøv igen",
      errorBadge: "Fejl ved overførsel&nbsp;&nbsp;&nbsp;",
      fileTooLargeError: "Fil er for stor til at vedhæfte",
      exceededFileCountError: "Har overskredet det maksimale antal tillladte vedhæftninger",
      selectFileTitle: "Vælg en fil",
      btnViewSubmissions: "Vis afsendelser",
      dateFormat: "ø_MM/DD/YYYY h:mm a_å"
    },
    builder: {
      invalidUser: "Du har desværre ikke tilladelse til at få dette element vist",
      invalidWebmapSelectionAlert: "Det valgte webkort indeholder ikke noget gyldigt lag, som kan anvendes. Føj et redigérbart vektorlag til dit webkort for at fortsætte.",
      invalidWebmapSelectionAlert2: "Der er flere oplysninger under  ${openLink}Hvad er en featuretjeneste?${closeLink}",
      selectFieldsText: "Vælg formularfelter",
      selectThemeText: "Vælg formulartema",
      webmapText: "Webkort",
      layerText: "Lag",
      detailsText: "Oplysninger",
      fieldsText: "Felter",
      styleText: "Typografi",
      optionText: "Indstillinger",
      previewText: "Forhåndsvisning",
      publishText: "Offentliggør",
      optionsApplicationText: "Indstillinger",
      titleText: "Builder",
      descriptionText: "GeoForm er en konfigurérbar skabelon til formularbaseret dataredigering af en ${link1}featuretjeneste${closeLink}. Med denne applikation kan brugerne indtaste data via en formular i stedet for kortets pop-op-vindue, samtidig med at styrken ved ${link2}webkort${closeLink} og redigérbare featuretjenester udnyttes. Følg følgende trin for at tilpasse og implementere din GeoForm.",
      btnPreviousText: "Forrige",
      btnNextText: "Næste",
      webmapTabTitleText: "Vælg et webkort",
      viewWebmap: "Vis webkort",
      webmapDetailsText: "Det valgte webkort er ${webMapTitleLink}${webMapTitle}${closeLink}. Hvis du vil vælge et andet webkort, skal du klikke på knappen 'Vælg webkort'.",
      btnSelectWebmapText: "Vælg webkort",
      btnSelectWebmapTextLoading: "Indlæser &Hjælp;",
      layerTabTitleText: "Vælg redigérbart lag",
      selectLayerLabelText: "Lag",
      selectLayerDefaultOptionText: "Vælg lag",
      defaultBasemap: "Skift baggrundskort",
      secondaryBasemap: "Standardbaggrundskort",
      detailsTabTitleText: "Formularoplysninger",
      detailTitleLabelText: "Titel",
      detailLogoLabelText: "Logobillede",
      descriptionLabelText: "Formularvejledning og oplysninger",
      fieldDescriptionLabelText: "Hjælptekst (valgfri)",
      fieldTabFieldHeaderText: "Felt",
      fieldTabLabelHeaderText: "Mærke",
      fieldTabDisplayTypeHeaderText: "Vis som",
      fieldTabOrderColumnText: "Rækkefølge",
      fieldTabVisibleColumnText: "Aktiveret",
      displayFieldText: "Visningsfelt:",
      selectMenuOption: "Vælg menu",
      selectRadioOption: "Alternativknap",
      selectTextOption: "Tekst",
      selectDateOption: "Datovælger",
      selectRangeOption: "Touch-Spinner",
      selectCheckboxOption: "Afkrydsningsfelt",
      selectMailOption: "E-mail",
      selectUrlOption: "URL",
      selectTextAreaOption: "Tekstområde",
      previewApplicationText: "Få vist eksempel på applikation",
      saveApplicationText: "Gem applikation",
      saveText: "Gem",
      toggleNavigationText: "Skift navigation",
      formPlaceholderText: "Min formular",
      shareBuilderInProgressTitleMessage: "Publicerer GeoForm",
      shareBuilderProgressBarMessage: "Vent&hellip;",
      shareBuilderTitleMessage: "Det lykkedes! Elementet er gemt",
      shareBuilderTextMessage: "Du kan starte indsamling af oplysninger ved at dele med andre",
      shareModalFormText: "Formular-link",
      shareBuilderSuccess: "Din GeoForm er blevet opdateret og publiceret!",
      geoformTitleText: "GeoForm",
      layerTabText: "GeoForm vil blive oprettet ud fra dette lag. Laget skal være en featuretjeneste, der er aktiveret for redigering med de delingsrettigheder, der er relevante for dit publikum.",
      detailsTabText: "Brug felterne med formularoplysninger til at tilpasse titlen, tilføje et brugerdefineret logo og indtaste en kort beskrivelse til dit GeoForm-publikum. I beskrivelsen kan du tilføje links til andre ressourcer og kontaktoplysninger og sågar dirigere dit publikum til en webkortapplikation med alle dataene, der er indsamlet med GeoForm.",
      fieldsTabText: "Her kan du vælge, hvilke felter der skal være synlige for dit GeoForm-publikum, redigere de labels, de får vist, og tilføje en kort beskrivelse til hjælp for dataindtastning.",
      styleTabText: "Forsyn din GeoForm med en typografi ved hjælp af temaerne nedenfor på grundlag af dine præferencer.",
      publishTabText: "Hvis du er færdig med at tilpasse din GeoForm, kan du gemme applikationen og begynde at dele med dit publikum. Du kan altid vende tilbage til dette builder-program og fortsætte tilpasningen på grundlag af feedback.",
      headerSizeLabel: "Overskriftstørrelse",
      smallHeader: "Brug lille overskrift",
      bigHeader: "Brug større overskrift",
      pushpinText: "Markeringsnål",
      doneButtonText: "Gem og afslut",
      fieldTabPlaceHolderHeaderText: "Tip (valgfrit)",
      enableAttachmentLabelText: "${openStrong}Aktivér vedhæftninger${closeStrong}",
      enableAttachmentLabelHint: "Du kan aktivere/deaktivere vedhæftninger her",
      attachmentIsRequiredLabelText: "${openStrong}Vedhæftning påkrævet${closeStrong}",
      attachmentIsRequiredLabelHint: "Det kan være nødvendigt, at brugerne indsætter en vedhæftning.",
      attachmentLabelText: "Mærke for Vedhæftning-knap",
      attachmentLabelHint: "Dette er teksten, der bliver vist ved siden af Vedhæftning-knappen. Du kan bruge dette felt til at beskrive, hvad dit publikum kan vedhæfte (foto, video, dokument osv.), det filformat, du beder om (.jpeg, .png, .docx, .pdf, osv.), samt eventuelle yderligere instruktioner.",
      attachmentDescription: "Beskrivelse af vedhæftelse",
      attachmentHint: "Du kan om nødvendigt give yderligere vejledning til vedhæftede filer her.",
      jumbotronDescription: "Brug stor eller lille overskrift til din formular. En stor overskrift kan hjælp med at definere formålet med applikationen, men den optager mere plads på skærmen.",
      shareGeoformText: "Del Geoform",
      shareDescription: "Delingspanelet gør det nemt for dit publikum at dele en GeoForm med andre kollegaer, når du har oprettet en afsendelse. Dette kan når som helst deaktiveres.",
      defaultMapExtent: "Standardkortudstrækning",
      defaultMapExtentDescription: "Dette kort nulstiller standardudstærkningen efter afsendelse. Dette kan når som helst deaktiveres.",
      pushpinOptionsDescription: "Vælg blandt forskellige farver til kortmarkeringsnåle, som skal adskille sig fra kortsymbolerne, for at hjælpe brugeren med at anbringe deres indsendelse på kortet",
      selectLocationText: "Vælg placering efter",
      myLocationText: "Min position",
      searchText: "Søg",
      coordinatesText: "Koordinater for længde- og breddegrad",
      usng: "USNG-koordinater",
      mgrs: "MGRS-koordinater",
      utm: "UTM-koordinater",
      selectLocationSDescription: "Tillad brugerne at vælge en placering vha. disse metoder.",
      dragTooltipText: "Træk feltet derhen, hvor du vil have det vist",
      showHideLayerText: "Vis lag",
      showHideLayerHelpText: "Du kan konfigurere GeoFormen til at Vise/Skjule lag. Denne indstilling gælder kun for en enkelt lagopsætning.",
      labelHelpMessage: "Mærke",
      placeHolderHintMessage: "Tiptekst",
      placeHolderHelpMessage: "Hjælpetekst",
      selectTextOptionValue: "Filtervalg",
      disableLogo: "Deaktivér logo",
      disableLogoDescription: "Du kan konfigurere GeoFormen til at Vise/Skjule logoet i formular-headeren",
      locateOnLoadText: "Find ved indlæsning",
      locateOnLoadDescription: "Du kan konfigurere GeoFormen til at bruge den aktuelle placering ved sideindlæsning",
      selectLayerFieldTabText: "Vælg lag",
      allLayerSelectOptionText: "ALLE",
      disableViewer: "Deaktivér visningsprogram",
      disableViewerDescription: "Du kan konfigurere GeoFormen til at deaktivere/aktivere visningsprogrammet",
      displayFieldHintText: "Det valgte visningsfelt vil blive vist i viewerMode som titelfelt"
    },
    viewer: {
      geocoderCancelText: "Annullér",
      viewReportsTabText: "Afsendelser",
      viewLegendTabText: "Signaturforklaring",
      viewAboutusTabText: "Om",
      viewMapTabText: "Kort",
      sortHeaderText: "Sortér efter:",
      btnSubmitReportText: "Send en rapport",
      geocoderPlaceholderText: "Postnummer, by osv.",
      noSearchResult: "Intet resultat fundet",
      recordsTabTooltip: "Vis afsendelser",
      legendTabTooltip: "Signaturforklaring",
      aboutUsTabTooltip: "AboutUs",
      mapTabTooltip: "Kort",
      appLoadingFailedMessage: "ViewerMode er utilgængelig",
      btnDescendingText: "Faldende",
      btnAscendingText: "Stigende",
      geometryUnavailableErrorMessage: "Kan ikke finde objektets geometri",
      infoPopupOffErrorMessage: "InfoPopup er deaktiveret",
      btnLoadMoreText: "Indlæse flere",
      unavailableTitleText: "Uden titel",
      unavailableConfigMessage: "Kan ikke indlæse konfigurationsfilen"
    }
  })
);
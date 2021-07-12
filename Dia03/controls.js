newsUI = {
  ...newsUI,
  controls: (() => {
    const frmFilters = {
      control: document.getElementById(this.name),
      name: "frmFilters",
      get init() {},
      get() {
        return document.getElementById(this.name);
      },
    };

    const txtTopic = {
      control: null,
      name: "txtTopic",
      get init() {
        this.control = document.createElement("custom-input");
        this.control.setAttribute("id", this.name);

        return this.control;
      },
      get() {
        return this.control;
      },
    };

    const cmbSources = {
      control: null,
      name: "cmbSources",
      get init() {
        this.control = document.createElement("drop-down");
        this.control.setAttribute("id", this.name);

        return this.control;
      },
      get() {
        return this.control;
      },
    };

    const lblTopic = {
      control: null,
      name: "lblTopic",
      get init() {
        this.control = document.createElement("label");
        this.control.setAttribute("id", this.name);
        this.control.innerHTML = "Topic";

        return this.control;
      },
      get() {
        return this.control;
      },
    };

    const lblSources = {
      control: null,
      name: "lblSources",
      get init() {
        this.control = document.createElement("label");
        this.control.setAttribute("id", this.name);
        this.control.innerHTML = "Sources";

        return this.control;
      },
      get() {
        return this.control;
      },
    };

    const btnSearch = {
      control: null,
      name: "btnSearch",
      get init() {
        this.control = document.createElement("custom-button");
        this.control.setAttribute("id", this.name);

        return this.control;
      },
      get() {
        return this.control;
      },
    };

    const cmbDates = {
      control: null,
      name: "cmbDates",
      get init() {
        this.control = document.createElement("drop-down");
        this.control.setAttribute("id", this.name);

        const dates = [
          { id: "day", name: "Last day" },
          { id: "week", name: "Last week" },
          { id: "month", name: "Last month" },
        ];

        this.control.setAttribute("data", JSON.stringify(dates));

        return this.control;
      },
      get() {
        return this.control;
      },
    };

    const lblDates = {
      control: null,
      name: "lblDates",
      get init() {
        this.control = document.createElement("label");
        this.control.setAttribute("id", this.name);
        this.control.innerHTML = "Last articles";

        return this.control;
      },
      get() {
        return this.control;
      },
    };

    const cmbLanguages = {
      control: null,
      name: "cmbLanguages",
      get init() {
        this.control = document.createElement("drop-down");
        this.control.setAttribute("id", this.name);

        const dates = [
          { id: "ar", name: "ar" },
          { id: "de", name: "de" },
          { id: "en", name: "en" },
          { id: "es", name: "es" },
          { id: "de", name: "de" },
          { id: "fr", name: "fr" },
          { id: "he", name: "he" },
          { id: "it", name: "it" },
          { id: "nl", name: "nl" },
          { id: "no", name: "no" },
          { id: "pt", name: "pt" },
          { id: "ru", name: "ru" },
          { id: "se", name: "se" },
          { id: "ud", name: "ud" },
          { id: "zh", name: "zh" },
        ];

        this.control.setAttribute("data", JSON.stringify(dates));

        return this.control;
      },
      get() {
        return this.control;
      },
    };

    const lblLanguages = {
      control: null,
      name: "lblLanguages",
      get init() {
        this.control = document.createElement("label");
        this.control.setAttribute("id", this.name);
        this.control.innerHTML = "Languages";

        return this.control;
      },
      get() {
        return this.control;
      },
    };

    const cmbSortBy = {
        control: null,
        name: "cmbSortBy",
        get init() {
          this.control = document.createElement("drop-down");
          this.control.setAttribute("id", this.name);

          const dates = [
            { id: "relevancy", name: "Relevancy" },
            { id: "popularity", name: "Popularity" },
            { id: "publishedAt", name: "PublishedAt" },
          ];
  
          this.control.setAttribute("data", JSON.stringify(dates));
  
          return this.control;
        },
        get() {
          return this.control;
        },
      };
  
      const lblSortBy = {
        control: null,
        name: "lblSortBy",
        get init() {
          this.control = document.createElement("label");
          this.control.setAttribute("id", this.name);
          this.control.innerHTML = "Sort by";
  
          return this.control;
        },
        get() {
          return this.control;
        },
      };

    return {
      frmFilters,
      lblTopic,
      txtTopic,
      lblSources,
      cmbSources,
      btnSearch,
      cmbDates,
      lblDates,
      cmbLanguages,
      lblLanguages,
      cmbSortBy,
      lblSortBy,
    };
  })(),
};

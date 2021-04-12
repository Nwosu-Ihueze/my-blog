
.two {
    grid-column-start: 3;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 4;
}
.three {
    grid-column-start: 6;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 3;
}
.four {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 6;
}


.five {
    grid-column-start: 3;
    grid-column-end: 6;
    grid-row-start: 4;
    grid-row-end: 6;
}
.photos {
    grid-column-start: 7;
    grid-column-end: 9;
    grid-row-start: 3;
    grid-row-end: 6;
}
.news {
    grid-column-start: 7;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 3;
}
}

@media (min-width: 500px) {
.gallery {
    grid-template-columns: 1fr 1fr;
}
.feature {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
}
.special {
    grid-column: 1;
    grid-row: 3 / 6;
}
.amazing {
    grid-column: 1;
    grid-row: 6;
}
.cta {
    grid-column: 2;
    grid-row: 5 / 7;
}
.photos {
    grid-column: 1;
    grid-row: 7 / 9;
}
.ops {
    grid-column: 2;
    grid-row: 7 / 9;
}
.news {
    grid-column: 2;
    grid-row: 3 / 5;
}
}





.one {
    grid-column: 1;
    grid-row: 1;
  }
  .two {
    grid-column: 2;
    grid-row: 1;
  }
  .three {
    grid-column: 3;
    grid-row: 1;
  }
  .four {
    grid-column: 1;
    grid-row: 2;
  }
  .five {
    grid-column: 2;
    grid-row: 2;
  }
  .six {
    grid-column: 3;
    grid-row: 2;
  }
  .seven{
    grid-column: 1;
    grid-row: 3;
  }
  .eight{
    grid-column: 2;
    grid-row: 3;
  }
  .nine{
    grid-column: 3;
    grid-row: 3;
  }
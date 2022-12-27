function Books(title, author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  Books.prototype.info = function (){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${(this.read) ? "read" : "not read yet"}`
}

//   const rab = new Books("Hobb" , "Abhi" , 158 , false);
//   console.log(rab.info())
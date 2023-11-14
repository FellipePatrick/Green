const openModal = () => {
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }

const closeModal = () =>  {
    document.getElementById('myModal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }

const clickUp = () => {
    let eventoTecla = new Event('keydown');
    eventoTecla.key = 'ArrowUp';
    document.dispatchEvent(eventoTecla);
}

const clickDown = () => {
    let eventoTecla = new Event('keydown');
    eventoTecla.key = 'ArrowDown';
    document.dispatchEvent(eventoTecla);
}

const clickRight = () => {
    let eventoTecla = new Event('keydown');
    eventoTecla.key = 'ArrowRight';
    document.dispatchEvent(eventoTecla);
}


const clickLeft = () => {
    let eventoTecla = new Event('keydown');
    eventoTecla.key = 'ArrowLeft';
    document.dispatchEvent(eventoTecla);
}

const clickEnter = () => {
    let eventoTecla = new Event('keydown');
    eventoTecla.key = 'Enter';
    document.dispatchEvent(eventoTecla);
}


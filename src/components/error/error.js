import h from 'virtual-dom/h';

import messages from './messages.json';

export default function Error(props, {
  backgroundColor,
  errorBackgroundColor,
  dropColor
}) {
  const style = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: backgroundColor,
    top: '0',
    left: '0',
    display: 'flex'
  };

  const textStyle = {
    fontSize: 'calc(5vh + 5vw)',
    color: dropColor,
    backgroundColor: errorBackgroundColor,
    fontFamily: 'Montserrat',
    textAlign: 'center',
    margin: 'auto',
    maxWidth: '80%',
    borderRadius: 'calc(1vw + 1vh)',
    padding: 'calc(2vw + 2vh) calc(4vw + 4vh)'
  };
  return h('div', {style}, [
    h('div', {style: textStyle}, [
      messages[Math.floor(Math.random() * messages.length)]
    ])
  ]);
}

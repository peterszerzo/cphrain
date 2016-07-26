import h from 'virtual-dom/h';

import messages from './messages.json';

export default function Error(props, {backgroundColor, dropColor}) {
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
    fontFamily: 'Montserrat',
    textAlign: 'center',
    margin: 'auto',
    padding: '0 10%'
  };
  return h('div', {style}, [
    h('div', {style: textStyle}, [
      messages[Math.floor(Math.random() * messages.length)]
    ])
  ]);
}

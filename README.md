Reshow Atomic Atom (React Component)
===============
Atomic design in React (atom)

* Live Demo: https://react-atomic-ui.js.org/

## NPM
https://www.npmjs.com/package/react-atomic-atom

## GIT
https://github.com/react-atomic/react-atomic-atom 

## Fantastic Tip
### refCB help get rid of findDOMNode
Before:
```JS
const Input = (props) =>
{
    return <input />;
}

class MyInput extends Component 
{
  componentDidMount()
  {
      findDOMNode(this.el).focus();
  } 

  render()
  {
      return <Input ref={el=>this.el=el} />;
  }
}
```

After:
```JS
const Input = (props) =>
{
    let {refCb, ...others} = props;
    if (refCb) {
        others.ref = refCb;
    }
    return <input {...others} />;
}

class MyInput extends Component 
{
  componentDidMount()
  {
     this.el.focus();
  } 

  render()
  {
      return <Input refCb={el=>this.el=el} />;
  }
}
```
   * More refs https://facebook.github.io/react/docs/refs-and-the-dom.html


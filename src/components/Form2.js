import { useLocalStorage } from '../useLocalStorage';

const Form2 = () => {
  const [name, setName] = useLocalStorage('name2', '');
  const [checked, setChecked] = useLocalStorage('checked', false);

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
        />
        {''}
        Not a robot?
      </label>
      <input type="submit" value="Submit"></input>
    </form>
  );
};

export default Form2;

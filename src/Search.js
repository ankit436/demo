function AutocompleteAsync() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const fetchSuggestions = async (query) => {
    setLoading(true);

    try {
      const response = await axios.get(`API_URL?q=${query}`);
      const data = response.data;
      setOptions(data.suggestions);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setOptions([]);
    }

    setLoading(false);
  };

  const handleInputChange = (event, value) => {
    setInputValue(value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelect = (event, value) => {
    console.log('Selected value:', value);
  };

  const handleRenderOption = (option) => {
    return <div>{option}</div>;
  };

  const handleRenderInput = (params) => (
    <TextField
      {...params}
      label="Search"
      InputProps={{
        ...params.InputProps,
        endAdornment: (
          <>
            {loading && <CircularProgress color="inherit" size={20} />}
            {params.InputProps.endAdornment}
          </>
        ),
      }}
    />
  );

  const handleInputChangeDebounced = debounce(fetchSuggestions, 300);

  return (
    <Autocomplete
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      options={options}
      loading={loading}
      renderOption={handleRenderOption}
      renderInput={handleRenderInput}
      onKeyUp={() => handleInputChangeDebounced(inputValue)}
      onSelect={handleSelect}
    />
  );
            }

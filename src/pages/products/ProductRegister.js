import {
  Autocomplete,
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Button, FormControlLabel, Switch
} from "@mui/material";
import {useState} from "react";
import CarouselBasic3 from "../../components/carousel/CarouselBasic3";
import image from '../../assets/img/sample-product.jpg'
import Divider from "@mui/material/Divider";
import {mockOptions} from "../../utils/mockData";

const sampleImages = [
  {url: image, _id: 'elemento1', order: 1, idImage: 'imagen1'},
  {url: image, _id: 'elemento2', order: 2, idImage: 'imagen2'},
  {url: image, _id: 'elemento3', order: 3, idImage: 'imagen3'},
]

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'rgba(151, 215, 0, 0.2)' : 'white',
  display: 'flex',
  padding: 8,
});

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: 16,
  margin: `0 8px 0 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
});


export default function ProductRegister() {
  const [list, setList] = useState(sampleImages);
  const [dragItem, setDragItem] = useState(null)
  const [productData, setProductData] = useState({
    productName: '',
    description: '',
    category: '',
    cost: '',
    isFeatured: false,
    isOnWeb: false,
    price: '',
    sucursalOne: '',
    sucursalTwo: ''
  })

  function changeProductData(type, value) {
    setProductData(prevState => ({
      ...prevState,
      [type]: value
    }))
  }

  // const reorder = (list, startIndex, endIndex) => {
  //   const result = Array.from(list);
  //   const [removed] = result.splice(startIndex, 1);
  //   result.splice(endIndex, 0, removed);
  //   return result.map((multi, i) => ({idImage: multi._id, order: i + 1}))
  // };


  async function onDragEnd(result) {
    const {destination, source} = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    // const newArr = reorder(arr, source.index, destination.index);
    console.log('newArray', result);
    // await updateOrderBanners(newArr)
  }

  const handleDragStart = (index) => {
    console.log(index);
    setDragItem(index);
  };

  const handleDragEnter = (e, index) => {
    const newList = [...list];
    const item = newList[dragItem];
    newList.splice(dragItem, 1);
    newList.splice(index, 0, item);
    setDragItem(index);
    setList(newList);
  };

  const handleDragLeave = (e) => {
  };

  const handleDrop = (e, index) => {
    console.log(e);
    console.log(index);
  };

  return (
    <Container>
      <Typography variant="h5" sx={{mb: 2}}>
        Registro Producto
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Paper elevation={2} sx={{p: 2}}>
            <Typography>Fotos</Typography>
            <Box
              sx={{display: 'flex', height: '100%'}}
            >
              {
                sampleImages.map((el, index) => (
                  <Box
                    draggable
                    sx={{ backgroundColor: 'white' }}
                    key={el._id}
                    onDragStart={() => handleDragStart(index)}
                    onDragEnter={(e) => handleDragEnter(e, index)}
                    onDragLeave={(e) => handleDragLeave(e)}
                    onDrop={(e) => handleDrop(e, index)}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <Box sx={{
                      width: '110px',
                      mr: 2,
                      p: 2,
                      cursor: 'grabbing',
                      borderRadius: '15px',
                    }}>
                      <img src={el.url} alt=""/>
                    </Box>
                  </Box>
                ))
              }
            </Box>

            <Divider sx={{my: 3}}/>
            <Box sx={{display: "flex", alignItems: "center", my: 3}}>
              <Typography sx={{pl: 4, flex: 0.2}}>
                Nombre del producto:
              </Typography>
              <TextField
                value={productData.name}
                onChange={(e) =>
                  changeProductData("productName", e.target.value)
                }
                sx={{flex: 0.8}}
                fullWidth
                id="user-name-textfield"
                size="small"
                placeholder="Nombre de producto"
                variant="outlined"
              />
            </Box>
            <Box sx={{display: "flex", alignItems: "center", my: 3}}>
              <Typography sx={{pl: 4, flex: 0.2}}>Descripcion:</Typography>
              <TextField
                value={productData.lastName}
                onChange={(e) =>
                  changeProductData("description", e.target.value)
                }
                multiline
                rows={4}
                sx={{flex: 0.8}}
                fullWidth
                id="user-name-textfield"
                size="small"
                placeholder="Descripcion"
                variant="outlined"
              />
            </Box>
            <Box sx={{display: "flex", alignItems: "center", my: 3}}>
              <Typography sx={{pl: 4, flex: 0.2}}>Categoria:</Typography>
              <Autocomplete
                value={productData.userType}
                getOptionLabel={(option) => option}
                onChange={(event, newValue) => changeProductData('category', newValue)}
                options={mockOptions}
                sx={{flex: 0.8}}
                id="pais-autocomplete"
                renderInput={(params) => (
                  <TextField {...params} size="small" placeholder="Categoria"/>
                )}
              />
            </Box>
            <Box sx={{display: "flex", alignItems: "center", my: 3}}>
              <Typography sx={{pl: 4, flex: 0.2}}>Precio:</Typography>
              <TextField
                value={productData.phone}
                onChange={(e) => changeProductData("price", e.target.value)}
                sx={{flex: 0.8}}
                type="number"
                fullWidth
                id="user-name-textfield"
                size="small"
                placeholder="Precio"
                variant="outlined"
              />
            </Box>
            <Box sx={{display: "flex", alignItems: "center", my: 3}}>
              <Typography sx={{pl: 4, flex: 0.2}}>Costo:</Typography>
              <TextField
                value={productData.mail}
                onChange={(e) => changeProductData("cost", e.target.value)}
                sx={{flex: 0.8}}
                fullWidth
                type="number"
                id="user-name-textfield"
                size="small"
                placeholder="Costo"
                variant="outlined"
              />
            </Box>
            <Box display="flex" flexDirection="column" px={5}>
              <FormControlLabel
                control={
                  <Switch
                    value={productData.isFeatured}
                    onChange={(e) =>
                      changeProductData("isFeatured", e.target.checked)
                    }
                  />
                }
                label="Destacar"
              />
              <FormControlLabel
                control={
                  <Switch
                    value={productData.isOnWeb}
                    onChange={(e) =>
                      changeProductData("isOnWeb", e.target.checked)
                    }
                  />
                }
                label="Mostrar en Web"
              />
            </Box>
            <Button variant="contained" sx={{mt: 4}} fullWidth>
              Registrar
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{p: 2}}>
            <Typography variant="h6">Vista previa</Typography>
            <Box sx={{width: "100%", maxWidth: "400px"}}>
              <Box sx={{overflow: "hidden"}}>
                <CarouselBasic3 items={sampleImages}/>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{mb: 2}}>
                  Nombre: {productData.productName}
                </Typography>
                <Typography sx={{mb: 2}}>
                  Precio: {productData.price}
                </Typography>
                <Typography sx={{mb: 2}}>
                  Sucursal sede 1: {productData.sucursalOne}
                </Typography>
                <Typography sx={{mb: 2}}>
                  Sucursal sede 2: {productData.sucursalTwo}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

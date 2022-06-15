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
import {PhotoCamera} from "@mui/icons-material";
import CarouselBasic3 from "../../components/carousel/CarouselBasic3";
import image from '../../assets/img/sample-product.jpg'
import Divider from "@mui/material/Divider";
import useReorderBanners from "../../hooks/api/useReorder";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

const sampleImages = [
  {url: image, _id: 1},
  {url: image, _id: 2},
  {url: image, _id: 3},
  {url: image, _id: 4},

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

  const { errorReorder, onDragEnd, reorderLoading } = useReorderBanners(() => console.log('se ejecuto la transicion!', sampleImages));

  function changeProductData(type, value) {
    setProductData(prevState => ({
      ...prevState,
      [type]: value
    }))
  }


  return (
    <Container>
      <Typography variant='h5' sx={{mb: 2}}>Registro Producto</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Paper elevation={2} sx={{p: 2}}>
            <Typography>Fotos</Typography>

            <DragDropContext onDragEnd={onDragEnd}>
              <Box sx={{ display: 'flex', height: '100%' }}>
                <Droppable droppableId='productImagesDroppableId' direction='horizontal'>
                  {(provided, snapshot) => (
                    <Box
                      sx={{ overflowX: 'scroll' }}
                      style={getListStyle(snapshot.isDraggingOver)}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {sampleImages.map((el, i) => (
                        <Draggable draggableId={el._id}>

                        </Draggable>
                        )}
                    </Box>
                  )}
                </Droppable>
              </Box>
            </DragDropContext>

            <Divider sx={{ my: 3 }} />
            <Box sx={{display: 'flex', alignItems: 'center', my: 3}}>
              <Typography sx={{pl: 4, flex: 0.2}}>Nombre del producto:</Typography>
              <TextField value={productData.name} onChange={e => changeProductData('productName', e.target.value)} sx={{flex: 0.8}}
                         fullWidth id="user-name-textfield" size='small' placeholder='Nombre de producto'
                         variant="outlined"/>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', my: 3}}>
              <Typography sx={{pl: 4, flex: 0.2}}>Descripcion:</Typography>
              <TextField value={productData.lastName} onChange={e => changeProductData('description', e.target.value)}
                          multiline rows={4} sx={{flex: 0.8}} fullWidth id="user-name-textfield" size='small' placeholder='Descripcion'
                         variant="outlined"/>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', my: 3}}>
              <Typography sx={{pl: 4, flex: 0.2}}>Categoria:</Typography>
              <Autocomplete
                value={productData.userType}
                onChange={e => changeProductData('category', e.target.value)}
                sx={{ flex: 0.8 }}
                id='pais-autocomplete'
                options={['Usuario 1', '...']}
                renderInput={(params) => <TextField {...params} size='small' placeholder='Categoria'/>}
              />
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', my: 3}}>
              <Typography sx={{pl: 4, flex: 0.2}}>Precio:</Typography>
              <TextField value={productData.phone} onChange={e => changeProductData('price', e.target.value)} sx={{flex: 0.8}}
                         type='number' fullWidth id="user-name-textfield" size='small'
                         placeholder='Precio' variant="outlined"/>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', my: 3}}>
              <Typography sx={{pl: 4, flex: 0.2}}>Costo:</Typography>
              <TextField value={productData.mail} onChange={e => changeProductData('cost', e.target.value)} sx={{flex: 0.8}}
                         fullWidth type='number' id="user-name-textfield" size='small' placeholder='Costo'
                         variant="outlined"/>
            </Box>


            <Box display='flex' flexDirection='column' px={5}>
              <FormControlLabel control={<Switch  value={productData.isFeatured} onChange={e => changeProductData('isFeatured', e.target.checked)} />} label="Destacar" />
              <FormControlLabel control={<Switch  value={productData.isOnWeb} onChange={e => changeProductData('isOnWeb', e.target.checked)} />} label="Mostrar en Web" />

            </Box>
            <Button variant='contained' sx={{mt: 4}} fullWidth>Registrar</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{p: 2}}>
            <Typography variant='h6'>Vista previa</Typography>
            <Box sx={{ width: '100%', maxWidth: '400px' }}>
              <Box sx={{overflow: "hidden"}}>
                <CarouselBasic3 items={sampleImages} />
              </Box>
              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Typography sx={{mb: 2}}>Nombre: {productData.productName}</Typography>
                <Typography sx={{mb: 2}}>Precio: {productData.price}</Typography>
                <Typography sx={{mb: 2}}>Sucursal sede 1: {productData.sucursalOne}</Typography>
                <Typography sx={{mb: 2}}>Sucursal sede 2: {productData.sucursalTwo}</Typography>
              </Box>
            </Box>

          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

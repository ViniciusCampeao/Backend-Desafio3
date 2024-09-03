import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
}));


app.post('/tours', async (req, res) => {
  try {
    const tour = await prisma.tour.create({
      data: req.body,
    });
    res.json(tour);
  } catch (error) {
    console.error('Error creating tour:', error);
    res.status(500).json({ error: 'Error creating tour' });
  }
});


app.get('/tours', async (req, res) => {
  try {
    const tours = await prisma.tour.findMany();
    res.json(tours);
  } catch (error) {
    console.error('Error fetching tours:', error);
    res.status(500).json({ error: 'Error fetching tours' });
  }
});


app.get('/tours/:id', async (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  try {
    const tour = await prisma.tour.findUnique({
      where: { id: id },
    });

    if (tour) {
      res.json(tour);
    } else {
      res.status(404).json({ error: 'Tour not found' });
    }
  } catch (error) {
    console.error('Error fetching tour:', error);
    res.status(500).json({ error: 'Error fetching tour' });
  }
});


app.put('/tours/:id', async (req, res) => {
  const tour = await prisma.tour.update({
    where: { id: Number(req.params.id) },
    data: req.body,
  });
  res.json(tour);
});

app.delete('/tours/:id', async (req, res) => {
  const tour = await prisma.tour.delete({
    where: { id: Number(req.params.id) },
  });
  res.json(tour);
});


app.post('/reviews', async (req, res) => {
  const review = await prisma.review.create({
    data: req.body,
  });
  res.json(review);
});

app.get('/reviews', async (req, res) => {
  const reviews = await prisma.review.findMany();
  res.json(reviews);
});

app.get('/reviews/:id', async (req, res) => {
  const review = await prisma.review.findUnique({
    where: { id: Number(req.params.id) },
  });
  res.json(review);
});

app.put('/reviews/:id', async (req, res) => {
  const review = await prisma.review.update({
    where: { id: Number(req.params.id) },
    data: req.body,
  });
  res.json(review);
});

app.delete('/reviews/:id', async (req, res) => {
  const review = await prisma.review.delete({
    where: { id: Number(req.params.id) },
  });
  res.json(review);
});

app.post('/types', async (req, res) => {
  const type = await prisma.types.create({
    data: req.body,
  });
  res.json(type);
});

app.get('/types', async (req, res) => {
  const types = await prisma.types.findMany();
  res.json(types);
});

app.get('/types-count', async (req, res) => {
    const types = await prisma.types.findMany({
      include: {
        _count: { select: { Tour: true } }
      }
    });

    const typesMap = types.map((type) => ({
      id: type.id,
      name: type.name,
      tours: type._count.Tour
    }));

    res.json(typesMap);
});

app.get('/types/:id', async (req, res) => {
  const type = await prisma.types.findUnique({
    where: { id: Number(req.params.id) },
  });
  res.json(type);
});

app.put('/types/:id', async (req, res) => {
  const type = await prisma.types.update({
    where: { id: Number(req.params.id) },
    data: req.body,
  });
  res.json(type);
});

app.delete('/types/:id', async (req, res) => {
  const type = await prisma.types.delete({
    where: { id: Number(req.params.id) },
  });
  res.json(type);
});

app.post('/cities', async (req, res) => {
  const city = await prisma.city.create({
    data: req.body,
  });
  res.json(city);
});

app.get('/cities', async (req, res) => {
  const cities = await prisma.city.findMany();
  res.json(cities);
});

app.get('/cities/:id', async (req, res) => {
  const city = await prisma.city.findUnique({
    where: { id: Number(req.params.id) },
  });
  res.json(city);
});

app.put('/cities/:id', async (req, res) => {
  const city = await prisma.city.update({
    where: { id: Number(req.params.id) },
    data: req.body,
  });
  res.json(city);
});

app.delete('/cities/:id', async (req, res) => {
  const city = await prisma.city.delete({
    where: { id: Number(req.params.id) },
  });
  res.json(city);
});

app.post('/countries', async (req, res) => {
  const country = await prisma.country.create({
    data: req.body,
  });
  res.json(country);
});

app.get('/countries', async (req, res) => {
  const countries = await prisma.country.findMany();
  res.json(countries);
});

app.get('/countries/:id', async (req, res) => {
  const country = await prisma.country.findUnique({
    where: { id: Number(req.params.id) },
  });
  res.json(country);
});

app.put('/countries/:id', async (req, res) => {
  const country = await prisma.country.update({
    where: { id: Number(req.params.id) },
    data: req.body,
  });
  res.json(country);
});

app.delete('/countries/:id', async (req, res) => {
  const country = await prisma.country.delete({
    where: { id: Number(req.params.id) },
  });
  res.json(country);
});

app.post('/users', async (req, res) => {
  const user = await prisma.user.create({
    data: req.body,
  });
  res.json(user);
});

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.get('/users/:id', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: String(req.params.id) },
  });
  res.json(user);
});

app.put('/users/:id', async (req, res) => {
  const user = await prisma.user.update({
    where: { id: String(req.params.id) },
    data: req.body,
  });
  res.json(user);
});

app.delete('/users/:id', async (req, res) => {
  const user = await prisma.user.delete({
    where: { id: String(req.params.id) },
  });
  res.json(user);
});

app.listen(3000, () => {
});
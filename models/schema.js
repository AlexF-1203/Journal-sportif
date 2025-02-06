// models/schema.js

// Structure des collections Firestore
const userSchema = {
  id: '', // string
  email: '', // string
  password: '', // string (hashé)
  first_name: '', // string
  last_name: '' // string
};

const exerciseSchema = {
  id: '', // string
  muscle: '', // string
  name: '' // string
};

const sessionSchema = {
  id: '', // string
  name: '', // string
  repetition: 0, // number
  serie: 0, // number
  tempo: '', // string
  user_id: '', // string (référence à user.id)
  exercise_id: '' // string (référence à exercise.id)
};

const trackingSchema = {
  id: '', // string
  serie_1: 0, // number
  serie_2: 0, // number
  serie_3: 0, // number
  serie_4: 0, // number
  user_id: '', // string (référence à user.id)
  seance_id: '', // string (référence à session.id)
  created_at: new Date() // timestamp
};

// Fonctions helpers pour la validation
const validateUser = (userData) => {
  return userData.email &&
         userData.password &&
         userData.first_name &&
         userData.last_name;
};

const validateExercise = (exerciseData) => {
  return exerciseData.muscle &&
         exerciseData.name;
};

const validateSession = (sessionData) => {
  return sessionData.name &&
         typeof sessionData.repetition === 'number' &&
         typeof sessionData.serie === 'number' &&
         sessionData.tempo &&
         sessionData.user_id &&
         sessionData.exercise_id;
};

const validateTracking = (trackingData) => {
  return typeof trackingData.serie_1 === 'number' &&
         typeof trackingData.serie_2 === 'number' &&
         typeof trackingData.serie_3 === 'number' &&
         typeof trackingData.serie_4 === 'number' &&
         trackingData.user_id &&
         trackingData.seance_id;
};

export {
  userSchema,
  exerciseSchema,
  sessionSchema,
  trackingSchema,
  validateUser,
  validateExercise,
  validateSession,
  validateTracking
};

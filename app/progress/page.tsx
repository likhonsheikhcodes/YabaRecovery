'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { FaSave } from 'react-icons/fa'

export default function ProgressPage() {
  const [weight, setWeight] = useState('')
  const [daysClean, setDaysClean] = useState('')
  const [waterIntake, setWaterIntake] = useState('')
  const [sleepHours, setSleepHours] = useState('')
  const [exerciseMinutes, setExerciseMinutes] = useState('')
  const [symptoms, setSymptoms] = useState<string[]>([])
  const [mood, setMood] = useState('')
  const [cravingIntensity, setCravingIntensity] = useState('')
  const [journalEntry, setJournalEntry] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { data, error } = await supabase
      .from('progress')
      .insert([
        { 
          weight, 
          days_clean: daysClean, 
          water_intake: waterIntake,
          sleep_hours: sleepHours,
          exercise_minutes: exerciseMinutes,
          symptoms, 
          mood,
          craving_intensity: cravingIntensity,
          journal_entry: journalEntry
        }
      ])
    if (error) {
      console.error('Error inserting data:', error)
      alert('Failed to update progress. Please try again.')
    } else {
      console.log('Data inserted successfully:', data)
      alert('Progress updated successfully!')
      // Reset form fields
      setWeight('')
      setDaysClean('')
      setWaterIntake('')
      setSleepHours('')
      setExerciseMinutes('')
      setSymptoms([])
      setMood('')
      setCravingIntensity('')
      setJournalEntry('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Update Your Recovery Progress</h1>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="weight" className="block mb-2 font-semibold">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="daysClean" className="block mb-2 font-semibold">Days Clean</label>
          <input
            type="number"
            id="daysClean"
            value={daysClean}
            onChange={(e) => setDaysClean(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="waterIntake" className="block mb-2 font-semibold">Water Intake (glasses)</label>
          <input
            type="number"
            id="waterIntake"
            value={waterIntake}
            onChange={(e) => setWaterIntake(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="sleepHours" className="block mb-2 font-semibold">Sleep (hours)</label>
          <input
            type="number"
            id="sleepHours"
            value={sleepHours}
            onChange={(e) => setSleepHours(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="exerciseMinutes" className="block mb-2 font-semibold">Exercise (minutes)</label>
        <input
          type="number"
          id="exerciseMinutes"
          value={exerciseMinutes}
          onChange={(e) => setExerciseMinutes(e.target.value)}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Symptoms (select all that apply)</label>
        <div className="grid grid-cols-2 gap-2">
          {['Fatigue', 'Anxiety', 'Insomnia', 'Depression', 'Cravings', 'Irritability', 'Headache', 'Nausea'].map((symptom) => (
            <div key={symptom} className="flex items-center">
              <input
                type="checkbox"
                id={symptom}
                value={symptom}
                checked={symptoms.includes(symptom)}
                onChange={(e) => {
                  if (e.target.checked) setSymptoms([...symptoms, symptom])
                  else setSymptoms(symptoms.filter(s => s !== symptom))
                }}
                className="mr-2"
              />
              <label htmlFor={symptom}>{symptom}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="mood" className="block mb-2 font-semibold">Overall Mood</label>
          <select
            id="mood"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Select your mood</option>
            <option value="Great">Great</option>
            <option value="Good">Good</option>
            <option value="Okay">Okay</option>
            <option value="Bad">Bad</option>
            <option value="Terrible">Terrible</option>
          </select>
        </div>
        <div>
          <label htmlFor="cravingIntensity" className="block mb-2 font-semibold">Craving Intensity (1-10)</label>
          <input
            type="number"
            id="cravingIntensity"
            value={cravingIntensity}
            onChange={(e) => setCravingIntensity(e.target.value)}
            min="1"
            max="10"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="journalEntry" className="block mb-2 font-semibold">Journal Entry</label>
        <textarea
          id="journalEntry"
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500"
          rows={4}
          placeholder="How are you feeling today? Any challenges or victories?"
        ></textarea>
      </div>

      <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 w-full transition-colors flex items-center justify-center">
        <FaSave className="mr-2" /> Update Progress
      </button>
    </form>
  )
}

